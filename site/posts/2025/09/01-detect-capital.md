---
title: "Detect Capital"
date: 2025-09-01 13:41:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [520. Detect Capital](https://leetcode.com/problems/detect-capital/description/)

**My solution:**
```js
/**
 * @param {string} word
 * @return {boolean}
 */
let detectCapitalUse = word => {
    if(word === word.toUpperCase()) return true;
    else if(word === word.toLowerCase()) return true;
    else if(word === word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase()) return true;
    return false;
};
```
