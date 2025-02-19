---
title: "Unique Number of Occurrences"
date: 2025-02-19 14:47:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [1207. Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} arr
 * @return {boolean}
 */
let uniqueOccurrences = arr => {
    let map = new Map(), set = new Set();
    arr.forEach(v => map.has(v) ? map.set(v,map.get(v)+1) : map.set(v,1));
    for (let [key,value] of map) {
        if(set.has(value)) {
            return false;
        } else {
            set.add(value);
        }
    }
    return true;
};
```
