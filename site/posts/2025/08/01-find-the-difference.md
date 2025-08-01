---
title: "Find the Difference"
date: 2025-08-01 16:44:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [389. Find the Difference](https://leetcode.com/problems/find-the-difference/description/)

**My solution:**
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
let findTheDifference = (s, t) => {
    let map = new Map();
    for(let i=0; i<t.length; i++) {
        map.has(t[i]) ? map.set(t[i], map.get(t[i])+1) : map.set(t[i], 1);
    }
    for(let i=0; i<s.length; i++) {
        if(map.has(s[i])) map.set(s[i], map.get(s[i])-1)
        if(map.get(s[i]) === 0) map.delete(s[i]);
    }
    return map.keys().toArray().join('');
};
```
