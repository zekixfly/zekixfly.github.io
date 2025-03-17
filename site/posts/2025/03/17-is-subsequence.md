---
title: "Is Subsequence"
date: 2025-03-17 14:13:00 +8
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
    let sPointer = 0, tPointer = 0;
    while(sPointer < s.length && tPointer < t.length) {
        if(s[sPointer] === t[tPointer]) sPointer++;
        tPointer++;
    }
    return sPointer === s.length;
}
```
