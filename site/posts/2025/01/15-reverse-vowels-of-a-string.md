---
title: "Reverse Vowels of a String"
date: 2025-01-15 22:43:00 +8
tags: [LeetCode]
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
    let tmp = '', stringArray = Array.from(s), left = 0, right = s.length - 1;
    while(left < right) {
        if(vowels.includes(stringArray[left].toLowerCase())) {
            if(vowels.includes(stringArray[right].toLowerCase())) {
                tmp = stringArray[left];
                stringArray[left] = stringArray[right];
                stringArray[right] = tmp;
                left++;
                right--;
            }else {
                right--;
            }
        }else {
            left++;
        }
    }
    return stringArray.join('');
};
```
