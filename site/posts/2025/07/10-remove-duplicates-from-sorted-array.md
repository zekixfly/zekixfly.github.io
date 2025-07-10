---
title: "Remove Duplicates from Sorted Array"
date: 2025-07-10 14:15:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = nums => {
    let set = new Set();
    for(let i=0; i<nums.length; i++) {
        if(set.has(nums[i])) nums.splice(i--, 1);
        else set.add(nums[i]);
    }
    return nums.length;
};
```
