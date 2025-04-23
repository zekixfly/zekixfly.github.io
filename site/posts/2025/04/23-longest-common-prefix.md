---
title: "Longest Common Prefix"
date: 2025-04-23 15:31:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/)

**My solution:**
```js
/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = strs => {
    let prefix = strs[0];
    for(let idx=0; idx<strs.length; idx++) {
        while(strs[idx].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix;
};
```
