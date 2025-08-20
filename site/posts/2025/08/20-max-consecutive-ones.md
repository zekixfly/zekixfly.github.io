---
title: "Max Consecutive Ones"
date: 2025-08-20 10:12:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [485. Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/description/)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let findMaxConsecutiveOnes = nums => {
    let max = 0, count = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 1) count++;
        else {
            max = Math.max(max, count);
            count = 0;
        }
    }
    return Math.max(max, count);
};
```
