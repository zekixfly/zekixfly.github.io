---
title: "Generate Fibonacci Sequence"
date: 2025-07-22 14:06:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [2648. Generate Fibonacci Sequence](https://leetcode.com/problems/generate-fibonacci-sequence/description/)

**My solution:**
```js
/**
 * @return {Generator<number>}
 */
let fibGenerator = function*() {
    let prev1 = 0, prev2 = 1, curr;
    while (true) {
        yield prev1;
        curr = prev1 + prev2;
        prev1 = prev2;
        prev2 = curr;
    }
};
/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
```
