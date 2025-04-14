---
title: "Median of Two Sorted Arrays"
date: 2025-04-14 15:09:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)

**My solution:**
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = (nums1, nums2) => {
    let merged = nums1.concat(nums2).sort((a, b) => a - b);
    return (merged.length % 2 !== 0) ? merged[Math.round(merged.length/2)-1] : (merged[(merged.length/2)-1] + merged[(merged.length/2)])/2
}
```
