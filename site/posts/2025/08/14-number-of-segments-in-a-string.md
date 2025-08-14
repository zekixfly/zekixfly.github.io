---
title: "Number of Segments in a String"
date: 2025-08-14 09:57:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [434. Number of Segments in a String](https://leetcode.com/problems/number-of-segments-in-a-string/description/)

**My solution:**
```js
/**
 * @param {string} s
 * @return {number}
 */
let countSegments = s => {
    s = s.replace(/\s+/g, ' ').trim();
    if(s.length === 0) return 0;
    return s.split(" ").length;
};
```
