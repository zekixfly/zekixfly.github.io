---
title: "Arranging Coins"
date: 2025-08-12 15:20:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [441. Arranging Coins](https://leetcode.com/problems/arranging-coins/description/)

**My solution:**
```js
/**
 * @param {number} n
 * @return {number}
 */
let arrangeCoins = n => {
    for(let i=1; i<=n; i++) {
        n -= i;
        if(n<i+1 || n === 0) return i;
    }
};
```
