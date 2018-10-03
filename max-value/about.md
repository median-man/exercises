# Max Value

Write a function that returns the maximum possible value given an array of objects and a capacity.

The objects represent a type of cake. Each `cakeType` has the following properties:

- `weight`: number for the weight of the cake
- `value`: monetary value of the cake

The function must calculate the maximum monetary value for a collection of cakes where the sum of their weights is less than or equal to the capacity. Assume that there is an unlimited number of available cakes for each type. Assume that that cakeTypes always contains at least one type where weight is less than or equal to capacity.

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

## Sources

This problem was first presented to me in a _Weekly Problem_ email from [Interview Cake][1]. In the email, a problem titled _[The Cake Thief][2]_ describes a scenario that is essentially the same as I've described above.

## References

- [Interview Cake][1]

[1]: https://www.interviewcake.com/
[2]: https://www.interviewcake.com/question/java/cake-thief
