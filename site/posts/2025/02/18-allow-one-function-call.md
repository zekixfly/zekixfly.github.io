---
title: "Allow One Function Call"
date: 2025-02-18 14:45:00 +8
tags: [VanillaJS]
#spell-checker: disable
---

> LeetCode題目: [2666. Allow One Function Call](https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript)

**My solution:**
```js
/**
 * @param {Function} fn
 * @return {Function}
 */
let once = fn => {
    function* gen() {
        yield fn;
    }
    let genFn = gen();
    return (...args) => {
        let onceValue = genFn.next().value;
        return onceValue ? onceValue(...args) : undefined;
    };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
```
