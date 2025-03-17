---
title: "Is Subsequence"
date: 2025-03-17 10:36:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [392. Is Subsequence](https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isSubsequence = (s, t) => {
    let sPointer = 0;
    for(let char of t) {
        if(s[sPointer] === char) sPointer++;
        if(sPointer === s.length) return true;
    }
    return sPointer === s.length;
}
```
