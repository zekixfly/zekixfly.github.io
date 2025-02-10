---
title: "Maximum Number of Vowels in a Substring of Given Length"
date: 2025-02-10 14:05:00 +7
tags: [VanillaJS, LeetCode]
#spell-checker: disable
---

> LeetCode題目: [1456. Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
let maxVowels = (s, k) => {
    const vowelLetter = ['a', 'e', 'i', 'o', 'u'];
    let convertDigitArray = Array.from(s).map(char=> vowelLetter.includes(char) ? 1 : 0);
    let baseValue = convertDigitArray.slice(0,k).reduce((prev,curr)=>prev+curr,0);
    let tempValue = baseValue;
    for(let i=0; i<s.length-k; i++) {
        baseValue = baseValue - convertDigitArray[i] + convertDigitArray[i+k];
        if(baseValue === k) return baseValue;
        tempValue = Math.max(tempValue, baseValue);
    }
    return tempValue;
};
```
