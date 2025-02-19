---
title: "Determine if Two Strings Are Close"
date: 2025-02-19 15:50:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [1657. Determine if Two Strings Are Close](https://leetcode.com/problems/determine-if-two-strings-are-close/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
let closeStrings = (word1, word2) => {
    if(word1.length !== word2.length) return false;
    const getData = word => {
        let map = new Map();
        Array.from(word).forEach(v => map.has(v) ? map.set(v, map.get(v)+1) : map.set(v, 1));
        return [map.keys().toArray().sort((a,b) => a>b ? 1 : -1).join(''), map.values().toArray().sort((a,b) => a-b).join('')];        
    }
    const w1Data = getData(word1);
    const w2Data = getData(word2);
    return w1Data[0] === w2Data[0] && w1Data[1] === w2Data[1];
};
```
