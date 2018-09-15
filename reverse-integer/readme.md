# Reverse Integer
Write a function which takes a 32-bit signed integer and returns a number for the digits in reverse
order. The [original problem][problem] may be found at [leetCode][lc].

**Examples:**
```
reverse(123) // 321
reverse(-123) // -321
reverse(120) // 021
```

## Notes
My initial solution leverages built-in JavaScript functions. The core of the algorithm involves the
following steps:

1. Cast the input to a string. (`n.toString()`)
2. Cast the string to an array. (`.split('')`)
3. Reverse the order of the array and convert back to a number. (`.reverse().join(')` etc.)

The sign is determined before the reversal process, stripped from the number, and applied after the
reversal.

After reviewing [ES6 Specification][es-reverse] for the definition of
`Array.prototype.reverse`, I determined that the time complexity for my initial solution is O(n).


### Initial Solution Failed:
My initial solution failed the following test case on leetCode:
```
reverse(1534236469) // expected 0 but returned 9646324351
```
This solution failed because I did not account for the fact that JavaScript does not have a 32-bit
integer type. All numbers in JavaScript are in double-precision 64-bit floating point format. There
are no other numeric types. ([*Number*, MDN][mdn-number])

My work-around for the number size issue is to add a check for the result of reversing the digits.
The function returns 0 if the resulting number is outside the range for 32-bit signed integers.
This solution is contrived because the number in memory will overflow the 32-bit limitation before
the value is checked for exceeding the 32-bit range. I am working off the assumption that JavaScript
uses 64 bits for any number that is instantiated. Furthermore, converting the number to an array of
strings will potentially be much larger than 32 bits as JavaScript treats strings as a sequence of
16-bit unsigned integer values. ([*6.1.4 The String Type*, ES6 Specification][es-string])

<!-- links -->
[lc]:https://leetcode.com/
[problem]:https://leetcode.com/problems/reverse-integer/description/
[es-reverse]:https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.reverse
[es-string]: https://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types-string-type
[mdn-number]:https://developer.mozilla.org/en-US/docs/Glossary/Number
