---
title: "Reverse Words in a String"
date: 2025-01-20 11:01:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = s => s.replace(/\s+/g,' ').trim().split(' ').reverse().join(' ');
```
