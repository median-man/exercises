# Length of Longest Substring
Write a function that takes a string as input and returns the length of the longest substring without repeating characters. The [original problem][problem] may be found at leetCode.

**Examples:**
```
lengthOfLongestSubstr('asdfjklaoek') -> 7 (asdfjkl)
lengthOfLongestSubstr('zzz') -> 1 (z)
lengthOfLongestSubstr('ddabcda') -> 4 (dabc)
```

## Notes
I was able to come up with an inefficient (with respect to time) brute force algorithim. After arriving at this solution, I read [this article][article] about the problem on leetCode.
<!-- links -->
[problem]:https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
[article]:https://leetcode.com/articles/longest-substring-without-repeating-characters/