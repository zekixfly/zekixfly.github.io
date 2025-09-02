---
title: "Reverse Words in a String III"
date: 2025-09-02 15:47:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [557. Reverse Words in a String III](https://leetcode.com/problems/reverse-words-in-a-string-iii/description/)

**My solution:**
```js
/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = s => s.split(' ').map(letter => {
    let reverseLetter = '';
    for(let i=0; i<letter.length; i++) {
        reverseLetter = letter[i] + reverseLetter;
    }
    return reverseLetter;
}).join(' ');
```
