---
title: "Valid Palindrome"
date: 2025-07-25 14:53:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/?envType=problem-list-v2&envId=rewycgxm)

**My solution:**
```js
/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = s => {
    const mainText = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reverseText = mainText.split('').reverse().join('');
    return mainText === reverseText;
};
```
