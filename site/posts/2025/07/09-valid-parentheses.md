---
title: "Valid Parentheses"
date: 2025-07-09 11:39:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/)

**My solution:**
```js
/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = s => {
    const dict = {
        '(':')',
        '[':']',
        '{':'}'
    };
    let stack = [];
    for (let i=0; i<s.length; i++) {
        if(dict[s[i]]) stack.push(dict[s[i]]);
        else if(stack.at(-1) === s[i]) stack.pop();
        else return false;
    }
    return stack.length === 0;
};
```
