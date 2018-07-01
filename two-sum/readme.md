# Two Sum
The Two Sum problem from https://leetcode.com/problems/two-sum/description/.

Given an array of integers, return indices of the two numbers such that they add up to a
specific target.

You may assume that each input would have exactly one solution, and you may not use the same
element twice.

```
Given nums = [3, 9, 6, 5], target = 9,

Because nums[0] + nums[2] = 3 + 6 = 9,
return [0, 2].
```

## What I learned
The Two Sum problem is fairly easy to solve with a brute force aproach (O(n2)). The performance of
this function is improved to nearly O(1) with the use of a hash. A complement is calculated and
added to the hash mapped to the index of the number it complements. The hash solution saves time at
the expense of space. The worst case for space is a hash table with n - 1 values where n is the
length of the array of numbers input.

**Example:**
```
given:
target = 5
nums = [1, 4, 9]

hash:
{
  '4': 0, // nums[0] + 4 = 5
  '1': 1, // nums[1] + 1 = 5
  '-4': 2, // nums[2] + -4 = 5
}
```

I also learned (again) that complement is not spelled "compliment". When the target is 5 and n = 1,
4 isn't impressed.
