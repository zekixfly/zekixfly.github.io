---
title: "Contains Duplicate"
date: 2025-08-08 09:57:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = nums => {
    let map = new Map();
    for(let i=0; i<nums.length; i++) {
        if(map.has(nums[i])) return true
        else map.set(nums[i], 1);
    }
    return false;
};
```
