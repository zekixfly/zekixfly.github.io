---
title: "Monotonic Array"
date: 2026-01-23 19:06:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode 題目: [896. Monotonic Array](https://leetcode.com/problems/monotonic-array/description/)

**My solution:**

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let isMonotonic = nums => {
  let monotonic = {
      increasing: false,
      decreasing: false
  }
  for(let i=0; i<nums.length; i++){
      if(nums[i] > nums[i-1]) monotonic.increasing = true;
      if(nums[i] < nums[i-1]) monotonic.decreasing = true;
      if(monotonic.increasing && monotonic.decreasing) return false;
  }
  return true;    
};
```
