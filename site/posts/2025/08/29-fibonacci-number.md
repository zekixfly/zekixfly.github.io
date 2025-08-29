---
title: "Fibonacci Number"
date: 2025-08-29 15:00:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/description/)

**My solution:**
```js
/**
 * @param {number} n
 * @return {number}
 */
let fib = n => {
    if(n === 1 || n === 0) return n;
    let prev1 = 0, prev2 = 1, curr;
    for(let i=2; i<=n; i++) {
        curr = prev2 + prev1;
        prev1 = prev2;
        prev2 = curr;
    }
    return curr;
}
```
