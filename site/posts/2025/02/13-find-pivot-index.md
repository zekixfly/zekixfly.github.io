---
title: "Find Pivot Index"
date: 2025-02-13 11:05:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [724. Find Pivot Index](https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let pivotIndex = nums => {
    let leftBaseValue = 0;
    let rightBaseValue = nums.slice(0).reduce((prev,curr) => prev+curr, 0);
    for (let i=0; i<nums.length; i++) {
        leftBaseValue += nums[i-1] ?? 0;
        rightBaseValue -= nums[i];
        if(leftBaseValue === rightBaseValue) return i;
    }
    return -1;
};
```
