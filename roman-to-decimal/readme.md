# Roman Numeral to Decimal
Write a function that returns a decimal number given a string for a roman numeral. Assume that the input string is a valid roman numeral.

```
f('III') = 3
f('XCVI') = 96
f('LXXIX') = 79
```

## Pseudocode
```
given string r

function f(r):

if length of r == 0, return 0
if length of r == 1
  if r[0] == 'i' return 1
  if r[0] == 'v' return 5
  if r[0] == 'x' return 10
  ... for roman numerals to 'm', return the value
end if

let next = f(r[1])
let current = f(r[0])
let remaining = substring of r from 3rd letter to the end

if next > current, return next - current + f(remaining)
return current + next + f(remaining)
```

## TDD
A test driven approach to writing the function was used after generating the initial pseudocode. As a result of this process, the section for `r == ` was replaced with a value map. This change abstracts finding the decimal value of a roman numeric symbol in the function.

## Background
This exercise is often encountered when searching for coding problems and interview questions. Details have been drawn from an interview question posted on Glassdoor.com for Facebook.
