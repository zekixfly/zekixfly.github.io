---
title: "Length of Last Word"
date: 2025-07-15 10:00:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/)

**My solution:**
```js
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = s => s.trim().replace(/\s+/g, ' ').split(' ').pop().length;
```
