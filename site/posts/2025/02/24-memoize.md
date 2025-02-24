---
title: "Memoize"
date: 2025-02-24 16:57:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [2623. Memoize](https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript)

**My solution:**
```js
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let map = new Map();
    return function(...args) {
        let key = args.join();
        if(map.has(key)) {
            return map.get(key);
        } else {
            map.set(key, fn(...args));
            return map.get(key);
        }
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
```
