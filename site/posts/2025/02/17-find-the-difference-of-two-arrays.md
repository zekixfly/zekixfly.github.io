---
title: "Find the Difference of Two Arrays"
date: 2025-02-17 10:25:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [2215. Find the Difference of Two Arrays](https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
let findDifference = (nums1, nums2) => {
    const n1 = new Set(nums1), n2 = new Set(nums2);
    return Array.of(Array.from(n1).filter(v => !n2.has(v)),Array.from(n2).filter(v => !n1.has(v)));
}
```
