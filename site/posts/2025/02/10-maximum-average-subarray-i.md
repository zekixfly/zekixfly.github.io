---
title: "Maximum Average Subarray I"
date: 2025-02-10 10:34:00 +7
tags: [VanillaJS, LeetCode]
#spell-checker: disable
---

> LeetCode題目: [643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findMaxAverage = (nums, k) => {
    let baseValue = nums.slice(0,k).reduce((prev,curr)=>prev+curr,0);
    let tempValue = baseValue;
    for(let i=0; i<nums.length-k; i++) {
        baseValue = baseValue - nums[i] + nums[i+k];
        tempValue = Math.max(baseValue, tempValue);
    }
    return tempValue/k;
};
```
