---
title: "Jewels and Stones"
date: 2025-09-19 11:22:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [771. Jewels and Stones](https://leetcode.com/problems/jewels-and-stones/description/)

**My solution:**
```js
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
let numJewelsInStones = (jewels, stones) => {
    let count = 0;
    for(let i=0; i<stones.length; i++) {
        if(jewels.includes(stones[i])) count++;
    }
    return count;
};
```
