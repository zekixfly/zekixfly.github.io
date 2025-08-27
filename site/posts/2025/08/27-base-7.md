---
title: "Base 7"
date: 2025-08-27 10:38:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [504. Base 7](https://leetcode.com/problems/base-7/description/)

**My solution:**
```js
/**
 * @param {number} num
 * @return {string}
 */
let convertToBase7 = num => {
    if(num === 0) return '0';
    let negative = num<0, res = '';
    num = Math.abs(num);
    while(num !== 0) {
        res += num%7;
        num = Math.floor(num/7);
    }
    res = (negative ? '-' : '') + res.split('').reverse().join('');
    return res;
};
```
