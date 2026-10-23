---
title: "N-th Tribonacci Number"
date: 2026-10-23 11:00:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode 題目: [1137. N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/description/)

**My solution:**

```js
/**
 * @param {number} n
 * @return {number}
 */
let tribonacci = n => {
    const tribonacciInit = [0,1,1];
    if(n===0 || n===1 || n===2) return tribonacciInit[n];
    let curr;
    for(let i=3; i<=n; i++) {
        curr = tribonacciInit[0] + tribonacciInit[1] + tribonacciInit[2];
        tribonacciInit[0] = tribonacciInit[1];
        tribonacciInit[1] = tribonacciInit[2];
        tribonacciInit[2] = curr;
    }
    return curr;
};
```