var request = require('superagent'),
    config = require('../config'),
    IncludeHandler = require('../src/IncludeHandler');

exports.showAllPosts = function(req,res,next){
    console.log(req.params.pageNum);
    var pageNum = parseInt(req.params.pageNum || 1);
    pageNum -= 1;

    request.get(config.baseUrl+'/static/posts.json',function(err,response){
        var itemsPerPage = config.itemsPerPage;
        res.locals.data = {
            "AllPostStore" : {
               "postsByPage" : {
               },
               "numberOfPosts": response.body.posts.length,
               "postListContent": response.body.postListContent
            }
        };

        res.locals.data.AllPostStore.postsByPage[pageNum+1] = response.body.posts.slice(itemsPerPage * pageNum, (itemsPerPage * pageNum) + itemsPerPage);
        res.locals.metaDescription = response.body.postListContent.metaDescription || '';

        next();
    });
}
