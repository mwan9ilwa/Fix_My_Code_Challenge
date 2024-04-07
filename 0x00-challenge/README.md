0x00. Fix my code

Tasks
0. FizzBuzz

Please take a look at my implementation of FizzBuzz in Python: source code

Something is going wrong….

$ ./0-fizzbuzz.py 50
1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 Fizz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 Fizz 31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz 41 Fizz 43 44 Fizz 46 47 Fizz 49 Buzz
$
15 should print FizzBuzz not Fizz

Fix
Ccheck for FizzBiuzz should be first in if else statement else the Fizz will be printed for numbers that are divisible by both 3 and 5 because Fizz was checked first
1. Print square

Please take a look at my implementation of printing a square in Javascript: source code

Something is going wrong….

$ ./1-print_square.js 4
####
####
####
####
$ ./1-print_square.js 10
################
################
################
################
################
################
################
################
################
################
################
################
################
################
################
################
$
./1-print_square.js 10 should print a square of size 10…

Fix
The code size = parseInt(process.argv[2], 16) is used to convert a hexadecimal (base 16) string representation of a number into its decimal (base 10) equivalent and assign it to the variable size.
Remove 16 to avoid conversion from base 16 to base 10 for line 17 to be size = parseInt(process.argv[2])
2. Sort

Please find here my implementation of sorting arguments in Ruby: source code

Something is going wrong….

$ ruby 2-sort.rb 12 41 2 C 9 -9 31 fun -1 32
31
32
12
41
2
9
-9
-1
$
Fix
Modifying the insert statement to result.insert(i, i_arg) to insert the element at index i instead of i - 1 on line 23
3. User password

Please find here my implementation of a User class in Python: source code

Something is going wrong….

$ ./3-user.py 
Test User
is_valid_password should return True if it's the right password
$
My tests should not print any error…

Fix
Typo in password function where __password is written as _password on line 43
Comparison in is_valid_password function where hashed password is being compared with uppercase hexadecimal (return hashlib.md5(pwd.encode()).hexdigest().upper() == self.__password) instead of lowercase hexadecimal (return hashlib.md5(pwd.encode()).hexdigest().lowe() == self.__password) as it was set in the password function on line 57
