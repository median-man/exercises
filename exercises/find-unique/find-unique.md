# Find Unique
Write a function that accepts an array of integers where each integer occurs twice except for one. The function should return the unique integer.

## Examples
```
findUnique([1,5,1]) -> 5
findUnique([1,2,3,5,2,5,1]) -> 3
```

## Algorithm
After studying the problem, I discovered the `XOR` (`^`) bitwise operator. The solution keeps tracks the result of starting with an initial value of 0 and assigning the result of the current value from the array with the result value (`result = result ^ current`).

In javascript, `Array.prototype.reduce` provides a compact syntax for defining the function.
```javascript
function findUnique(ints) {
  return ints.reduce((x, y) => x ^ y, 0);
}
```

My initial algorithm involved using two hash maps to track out and back. Looping over each element in the array, checking if `out[value]` exists. If not, add the value to `out`. If the value was found in `out`, remove the value from `out` and add it to `in`. The return the only element left in `out` after completing the for each loop.

## Sources
This problem was first presented to me in a *Weekly Problem* email from [Interview Cake][1]. In the email, a problem titled *[The Stolen Breakfast Drone][2]* describes a scenario with the same essential problem I've described above. This is the first time I can ever recall using a bitwise operator. The algorithm was pretty new to me.

## References
* [Interview Cake][1]
* [Bitwise operators][3]

[1]:https://www.interviewcake.com/
[2]:https://www.interviewcake.com/question/java/find-unique-int-among-duplicates
[3]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators