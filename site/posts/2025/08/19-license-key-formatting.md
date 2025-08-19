---
title: "License Key Formatting"
date: 2025-08-19 10:20:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [482. License Key Formatting](https://leetcode.com/problems/license-key-formatting/description/)

**My solution:**
```js
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
let licenseKeyFormatting = (s, k) => {
    const combind = s.replace(/-/g, '').toUpperCase();
    if(combind.length <= k) return combind;
    const firstLength = combind.length % k;
    let result = firstLength !== 0 ? combind.slice(0, firstLength) + '-' : '';
    const otherKey = result ? combind.slice(firstLength) : combind;
    for(let i=0; i<otherKey.length; i++) {
        result += otherKey[i];
        if((i+1) % k === 0 && i !== otherKey.length - 1) result += '-';
    }
    return result;
}
```
