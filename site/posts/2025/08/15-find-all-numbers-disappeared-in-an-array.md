---
title: "Find All Numbers Disappeared in an Array"
date: 2025-08-15 14:28:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [448. Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findDisappearedNumbers = nums => {
    let set = new Set(nums);
    let lostDigits = [];
    for(let i=0; i<nums.length; i++) {
        if(!set.has(i+1)) lostDigits.push(i+1);
    }
    return lostDigits;
};
```
