---
title: "Backspace String Compare"
date: 2025-09-26 14:24:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [844. Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/description/)

**My solution:**
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let backspaceCompare = (s, t) => {
    while(s.includes('#')) s = s.replace(/^#|\w#/g, '');
    while(t.includes('#')) t = t.replace(/^#|\w#/g, '');
    return s === t;
};
```
