# Decimal to Roman

Write a function which accepts an integer and returns a roman numeral string. Assume input is a natural number less than or equal to 4,999.

```
f(12) = 'xxii'
f(1776) = 'mdcclxxvi'
f(1982) = 'mcmlxxxii'
```

## Pseudocode

There are a few ways to structure the algorithm. The method below is a bit verbose, but easy to understand and edit. Performance shouldn't be an issue. The recursion does make it more demanding on storage compared to alternative approaches.

```
given num is a natural number
function f(num):

if num == 0 return ''
if num >= 1000 return 'm' + f(num - 1000)
if num >= 900 return 'cm' + f(num - 900)
if num >= 500 return 'd' + f(num - 500)
if num >= 400 return 'cd' + f(num - 400)
if num >= 100 return 'c' + f(num - 100)
if num >= 90 return 'xc' + f(num - 90)
if num >= 50 return 'l' + f(num - 50)
if num >= 40 return 'xl' + f(num -40)
if num >= 10 return 'x' + f(num - 10)
if num >= 9 return 'ix' + f(num - 9)
if num >= 5 return 'v' + f(num -5)
if num >= 4 return 'iv' + f(num - 4)
return 'i' + f(num - 1)
```

## Code Solution

During the TDD process, I opted to use a single dictionary mapping the integers to each roman numeric symbol. The solution could be written as a loop, iterating over powers of 10. But, such a solution provides no significant improvement in performance and makes the code more difficult to read. The solution I developed makes it easy to understand and easy to modify the symbols.

Researching the problem, I found many versions of a solution where each possible symbol group is mapped--e.g. { 1: 'i', 2: 'ii', 3: 'iii', 4: 'iv' }. This approach does provide a slight performance increase and isn't too difficult to read. One disadvantage of this approach is a greater chance for introducing a bug if a symbol needed to be changed because the symbol must be updated in many places.

## Background

Searching for interview questions on Google produces this question often. 4,999 is the largest number that can be expressed by Roman Numerals. Learn more about Roman Numerals [here](https://en.wikipedia.org/wiki/Roman_numerals).
