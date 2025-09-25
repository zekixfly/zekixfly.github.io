---
title: "Goat Latin"
date: 2025-09-25 13:51:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [824. Goat Latin](https://leetcode.com/problems/goat-latin/description/)

**My solution:**
```js
/**
 * @param {string} sentence
 * @return {string}
 */
let toGoatLatin = sentence => {
    const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return sentence.split(' ').map((word, idx) => {
        word = `${vowel.includes(word[0]) ? word : word.slice(1) + word.at(0)}ma`;
        for(let i=0; i<=idx; i++) word += 'a';
        return word;
    }).join(' ');
};
```
