# Max Value

Write a function that returns the maximum possible value given an array of objects and a capacity.

The objects represent a type of cake. Each `cakeType` has the following properties:

- `weight`: number for the weight of the cake
- `value`: monetary value of the cake

The function must calculate the maximum monetary value for a collection of cakes where the sum of their weights is less than or equal to the capacity. Assume that there is an unlimited number of available cakes for each type. Returns `Infinity` if if any cake has a weight equal to 0 and a positive value.

## Example

```
Given:
  cakeTypes = Array(
    { weight: 7, value: 160 },
    { weight: 3, value: 90 },
    { weight: 2, value: 15 },
  )
  capacity = 20

Result: 555 (6 x 90 + 15)
```

## Algorithm

The solution I arrived at is based on the [Unbounded Knapsack Problem][2]. The time complexity for the solution is O(n * k) where n is the number of cake types in the array and k is the capacity. The solution consist of two loops. The outer loop steps from 1 to the capacity. The inner loop executes a constant number of steps for each cake type in the array.

## Sources

This problem was first presented to me in a _Weekly Problem_ email from [Interview Cake][1]. In the email, a problem titled _[The Cake Thief][2]_ describes a scenario that is essentially the same as I've described above. According to Interview Cake, one possible algorithm is known as "the unbounded knapsack problem."

## Recommended Reading

- [Interview Cake: Cake Thief][2]
- [Wikipedia: Knapsack Problem][3]
- [Interview Cake: Memoization][4]
- [Interview Cake: Bottom-Up Algorithms][5]

[1]: https://www.interviewcake.com/
[2]: https://www.interviewcake.com/question/java/cake-thief
[3]: https://en.wikipedia.org/wiki/Knapsack_problem
[4]: https://www.interviewcake.com/concept/javascript/memoization?
[5]: https://www.interviewcake.com/concept/javascript/bottom-up?
