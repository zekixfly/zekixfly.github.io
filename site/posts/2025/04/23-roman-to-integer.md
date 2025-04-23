---
title: "Roman to Integer"
date: 2025-04-23 14:07:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/)

**My solution:**
```js
/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = s => {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let res = 0;
    for(let idx=0; idx<s.length; idx++) {
        if(roman[s[idx]] < roman[s[idx+1]]) {
            res -= roman[s[idx]];
        } else {
            res += roman[s[idx]];
        }
    }
    return res;
}
```
