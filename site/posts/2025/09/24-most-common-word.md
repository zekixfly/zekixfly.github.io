---
title: "Most Common Word"
date: 2025-09-24 14:13:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [819. Most Common Word](https://leetcode.com/problems/most-common-word/description/)

**My solution:**
```js
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
let mostCommonWord = (paragraph, banned) => {
    const filterWords = paragraph.toLowerCase().replace(/[^\w]\s|[^\w]/g, ' ').trim().split(' ').filter(word => !banned.includes(word));
    let map = new Map();
    for(let i=0; i<filterWords.length; i++) {
        map.has(filterWords[i]) ? map.set(filterWords[i], map.get(filterWords[i]) + 1): map.set(filterWords[i], 1);
    }
    return Array.from(map).sort(([aWord, aCount], [bWord, bCount]) => bCount - aCount)[0][0];
};
```
