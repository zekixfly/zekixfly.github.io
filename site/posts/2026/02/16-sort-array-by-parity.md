---
title: "Sort Array By Parity"
date: 2026-02-16 18:38:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode 題目: [905. Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/description/)

**My solution:**

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let sortArrayByParity = nums => {
    let result = [];
    for(let i=0; i<nums.length; i++) nums[i]%2 === 0 ? result.unshift(nums[i]) : result.push(nums[i]);
    return result;
};
```
