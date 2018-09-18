# Two Sum
Write a function named *twoSum*, which, given an array of integers and a target, returns the indices for the two numbers for which their sum is equal to the target. Assume that each input has exactly one solution and the same element may now be used twice. The [original problem][problem] may be found at [leetCode][lc].

**Examples:**
```
twoSum([2, 5, 8], 10) --> [0, 2] // 2 + 8 = 10
twoSum([8, 2, 5, 12], 14) --> [1, 3] // 2 + 12 = 14
```

## Steps
### Map Solution
A linear time complexity in relation to the array of numbers is achieved by using an object (hash table) where each key is a number from `nums` and each value is the corresponding index.

```
time complexity: O(n)

given:
  nums: array
  target: number

let map = {}
let result = []

FOR (i = 0; i < nums.length; nums += 1)
  let num = nums[i]
  let compliment = target - num
  IF map has compliment
    result = [map[compliment], i]
  END IF
  map[num] = i;
END FOR

return result;
```

### Brute force solution
```
time complexity: O(n^2)

given:
  nums: array
  target: num

let a = 0, maxa = nums.length - 1, result = []
while (a < maxa)
  let b = 1

  while (b < nums.length)
    if (nums[a] + nums[b] === target)
      result = [a, b]
    end if
    b += 1
  end while

  a += 1
end while

return result
```

## Notes
When I first started to pseudo code the steps, I was taking the brute force approach. Thankfully, something didn't feel right. Then, recall struck! I had once learned to use a hash map to structure the data for this problem. Using a map allows for a solution with only a single loop over the input array in the worst case.

<!-- links -->
[lc]:https://leetcode.com/
[problem]:https://leetcode.com/problems/two-sum/description/

