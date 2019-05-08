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
This is my first time that I can recall working with a linked list. The main devices to learn are
the fact that each node in the list maintains the next node's existance in memory via the next
property's reference to the node. 

In order to keep the test code well organized, I created a method which accepts any number of values
as arguments and returns a linked list storing each value in a node in the list. In this method, the
arguments are converted to an array, the order is reversed, then the reduce method is used to form
the linked list and return the head node of the list. The process of developing this method to
create a linked list deepened my understanding of how to work with the structure in the context of
JavaScript.

<!-- links -->
[add-two]:https://leetcode.com/problems/add-two-numbers/description/