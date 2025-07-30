---
title: "Majority Element"
date: 2025-07-30 13:49:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [169. Majority Element](https://leetcode.com/problems/majority-element/description/)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = nums => {
    if(nums.length === 1) return nums.at(0);
    const halfLength = nums.length / 2;
    let map = new Map();
    for(let i=0; i<nums.length; i++) {
        if(map.has(nums[i])) {
            if(map.get(nums[i])+1 > halfLength) return nums[i];
            map.set(nums[i], map.get(nums[i])+1);
        } else map.set(nums[i], 1);
    }
};
```
