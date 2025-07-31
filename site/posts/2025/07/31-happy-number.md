---
title: "Happy Number"
date: 2025-07-31 11:34:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [202. Happy Number](https://leetcode.com/problems/happy-number/description/)

**My solution:**
```js
/**
 * @param {number} n
 * @return {boolean}
 */
let isHappy = n => {
    let stack = [];
    while(n !== 1) {
        n = String(n).split('').reduce((acc, strDigit) => acc + Math.pow(Number(strDigit), 2), 0);
        if(stack.includes(n)) return false;
        stack.push(n);
    }
    return true;
};
```
