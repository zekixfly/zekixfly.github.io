---
title: "Max Consecutive Ones III"
date: 2025-03-24 15:20:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let longestOnes = (nums, k) => {
    let left = 0, right = 0, flip = 0, res = 0;
    while(right < nums.length) {
        if(nums[right] === 0) ++flip;
        while(flip > k) {
            if(nums[left] === 0) --flip;
            ++left;
        }
        res = Math.max(res, right - left + 1);
        ++right;
    }
    return res;
}
```
