---
title: "Greatest Common Divisor of Strings"
date: 2025-02-24 13:25:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [1071. Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
let gcdOfStrings = (str1, str2) => {
    if(str1 + str2 !== str2 + str1) return '';
    const searchGCD = (digitA, digitB) => (digitA % digitB === 0) ? digitB : searchGCD(digitB, digitA % digitB);
    const gcdDigit = searchGCD(str1.length, str2.length);
    return str1.substring(0, gcdDigit);
};
```
