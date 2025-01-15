---
title: "Reverse Vowels of a String"
date: 2025-01-15 17:03:00 +7
tags: [VanillaJS, LeetCode]
#spell-checker: disable
---

> LeetCode題目: [345. Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {string} s
 * @return {string}
 */
let reverseVowels = s => {
    if(s.length < 1 || s.length > 3*Math.pow(10,5)) return 'string length has error';
    const vowels = ['a','e','i','o','u'];
    let recordVowels = [], stringArray = Array.from(s);
    for(let i=0; i<s.length ;i++) {
        vowels.includes(stringArray[i].toLowerCase()) && recordVowels.push([i, stringArray[i]]);
    }
    for(let i=0; i<recordVowels.length; i++) {
        stringArray[recordVowels[i][0]] = recordVowels[(recordVowels.length-1)-i][1];
    }
    return stringArray.join('');
};
```
