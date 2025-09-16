---
title: "Find Smallest Letter Greater Than Target"
date: 2025-09-16 16:20:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [744. Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/)

**My solution:**
```js
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
let nextGreatestLetter = (letters, target) => {
    const targetCharCode = target.charCodeAt();
    for(let i=0; i<letters.length; i++){
        if(letters[i].charCodeAt() > targetCharCode) return letters[i];
    }
    return letters[0];
};
```
