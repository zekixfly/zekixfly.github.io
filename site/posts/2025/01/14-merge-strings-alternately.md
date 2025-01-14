---
title: "Merge Strings Alternately"
date: 2025-01-14 10:20:00 +7
tags: [VanillaJS, LeetCode]
#spell-checker: disable
---

> LeetCode題目: [1768. Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
let mergeAlternately = (word1, word2) => {
    if (word1.length < 1 || word2.length > 100) {
        return 'sorry, Words length has error!'; 
    }
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    let i = 0;
    let maxLength = Math.max(word1.length, word2.length);
    let mergedArray = [];
    while(i < maxLength) {
        (i < word1.length) && (mergedArray = [...mergedArray, word1[i]]);            
        (i < word2.length) && (mergedArray = [...mergedArray, word2[i]]);
        i++;
    }
    return mergedArray.join('');
};
```
