# Add Two Numbers
Given two non-empty linked lists for two integers > -1 where the digits are stored in reverse order
and only one digit is stored per node, add the two numbers and return it as a linked list.

This exercise comes from [Add Two Numbers][add-two] on leetCode.

## Example
```
input: LinkedList(0, 1, 2), LinkedList(1, 3, 5)
output: LinkedList(1, 7, 4)
// 210 + 531 = 741
```

## Notes
This is a somewhat awkward problem since JavaScript does not have a built in type for linked list.
To that end, I will create a wrapper constructor that returns an object which behaves as a linked
list.

<!-- links -->
[add-two]:https://leetcode.com/problems/add-two-numbers/description/