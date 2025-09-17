---
title: "Largest Number At Least Twice of Others"
date: 2025-09-17 15:28:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [747. Largest Number At Least Twice of Others](https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let dominantIndex = nums => {
    const sortArrays = nums.map((item, idx) => [idx, item]).sort((a, b) => a[1] - b[1]);
    return sortArrays.at(-2)[1] * 2 <= sortArrays.at(-1)[1] ? sortArrays.at(-1)[0] : -1;
};
```
