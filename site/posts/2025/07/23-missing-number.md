---
title: "Missing Number"
date: 2025-07-23 14:49:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [268. Missing Number](https://leetcode.com/problems/missing-number/description/?envType=problem-list-v2&envId=rewycgxm)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = nums => {
    nums.sort((a, b) => a-b);
    for (let i=0; i<=nums.length; i++) {
        if(nums[i] !== i) return i;
    }
};
```
