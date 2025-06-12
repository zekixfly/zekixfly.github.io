---
title: "Maximum Difference Between Adjacent Elements in a Circular Array"
date: 2025-06-12 15:12:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [3423. Maximum Difference Between Adjacent Elements in a Circular Array](https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/description/?envType=daily-question&envId=2025-06-12)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let maxAdjacentDistance = nums => {
    let max = 0;
    for(let i=0; i<nums.length; i++) {
        max = Math.max(max, Math.abs(nums.at(i) - nums.at(i-1)));
    }
    return max;
};
```
