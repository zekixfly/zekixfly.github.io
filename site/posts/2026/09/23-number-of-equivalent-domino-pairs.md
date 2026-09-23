---
title: "Number of Equivalent Domino Pairs"
date: 2026-09-23 16:23:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode 題目: [1128. Number of Equivalent Domino Pairs](https://leetcode.com/problems/number-of-equivalent-domino-pairs/description/)

**My solution:**

```js
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
let numEquivDominoPairs = dominoes => {
    let pairsNumber = 0, map = new Map();
    for(const [a, b] of dominoes){
        let key = [Math.min(a,b), Math.max(a,b)].join();
        if(map.has(key)) {
            pairsNumber += map.get(key);
            map.set(key, map.get(key)+1);
        } else {
            map.set(key, 1);   
        }
    }   
    return pairsNumber;
};
```