---
title: "Binary Number with Alternating Bits"
date: 2025-08-06 10:16:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [693. Binary Number with Alternating Bits](https://leetcode.com/problems/binary-number-with-alternating-bits/description/)

**My solution:**
```js
/**
 * @param {number} n
 * @return {boolean}
 */
let hasAlternatingBits = n => {
    let binary = n.toString(2);
    for(let i=0; i<binary.length; i++) {
        if(binary[i] === binary[i+1]) return false;
    }
    return true;
};
```
