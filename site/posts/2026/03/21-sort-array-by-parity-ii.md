---
title: "Sort Array By Parity II"
date: 2026-03-21 15:12:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode 題目: [922. Sort Array By Parity II](https://leetcode.com/problems/sort-array-by-parity-ii/description/)

**My solution:**

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let sortArrayByParityII = nums => {
    let result = [];
    for(let i=0; i<nums.length; i++) nums[i]%2 === 0 ? result.unshift(nums[i]) : result.push(nums[i]);
    nums = result;
    result = [];
    for(let i=0; i<Math.ceil(nums.length/2); i++) {
        result.push(nums[i]);
        result.push(nums.slice(-1-i).at(0));
    }
    return result;
};
```
