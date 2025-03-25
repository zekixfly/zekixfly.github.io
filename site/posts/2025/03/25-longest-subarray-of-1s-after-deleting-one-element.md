---
title: "Longest Subarray of 1's After Deleting One Element"
date: 2025-03-24 15:20:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [1493. Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let longestSubarray = nums => {
    let left = 0, right = 0, remove = 1, maxLen = 0;
    while(right < nums.length) {
        if(nums[right] === 0) --remove;
        if(remove < 0 && nums[left++] === 0) ++remove;
        maxLen = Math.max(maxLen, right - left);
        ++right;
    }
    return maxLen;
};
```
