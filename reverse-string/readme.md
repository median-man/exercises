# Reverse String
The [Reverse String problem][problem] from leetCode.

Write a function that accepts a string as input and returns the string reversed.

**Example:**  
f('hello') = 'olleh'

## Notes
I came up with a recursive solution. This works for most situations. However, leetCode throws a
runtime error because the call stack size is exceeded. This is strange, but shows that not all
solutions are created equal. Exceptionally large strings may fail in certain environments where an
alternate solution doesn't. Another possible solution is to split the string into an array of
characters and call reduce to return a string with the order reversed. Of course, calling reverse
on the array will aslo work :)

<!-- Links -->
[problem]:https://leetcode.com/problems/reverse-string/description/