---
title: "Plus One"
date: 2025-07-16 11:12:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [66. Plus One](https://leetcode.com/problems/plus-one/description/)

**My solution:**
```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = digits => (BigInt(digits.join(''))+BigInt(1)).toString().split('').map(item => Number(item));
```
