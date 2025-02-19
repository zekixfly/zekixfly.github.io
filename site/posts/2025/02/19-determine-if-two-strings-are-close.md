---
title: "Determine if Two Strings Are Close"
date: 2025-02-19 14:03:00 +8
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
    const w1Set = new Set(word1), w2Set = new Set(word2);
    if(!w1Set.isSupersetOf(w2Set)) return false;
    let w1map = new Map(), w2map = new Map();
    Array.from(word1).forEach(v => w1map.has(v) ? w1map.set(v,w1map.get(v)+1) : w1map.set(v,1));
    Array.from(word2).forEach(v => w2map.has(v) ? w2map.set(v,w2map.get(v)+1) : w2map.set(v,1));
    return w1map.values().toArray().sort((a,b)=> a-b).join('') === w2map.values().toArray().sort((a,b)=> a-b).join('');
};
```
