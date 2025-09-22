---
title: "Rotate String"
date: 2025-09-22 10:10:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [796. Rotate String](https://leetcode.com/problems/rotate-string/description/)

**My solution:**
```js
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
let rotateString = (s, goal) => {
    for(let i=0; i<s.length; i++) {
       if(s.slice(i) + s.slice(0, i) === goal) return true;
    }
    return false;
};
```
