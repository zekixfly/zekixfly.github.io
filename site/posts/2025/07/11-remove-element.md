---
title: "Remove Element"
date: 2025-07-11 11:50:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [27. Remove Element](https://leetcode.com/problems/remove-element/description/)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = (nums, val) => {
    let k = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] !== val) nums[k++] = nums[i];
    }
    nums.splice(k);
    return k;
};
```
