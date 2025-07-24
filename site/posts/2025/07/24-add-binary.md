---
title: "Add Binary"
date: 2025-07-24 11:16:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [67. Add Binary](https://leetcode.com/problems/add-binary/description/)

**My solution:**
```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = (a, b) => (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
```
