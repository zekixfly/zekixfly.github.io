---
title: "Decode String"
date: 2025-04-01 16:33:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [394. Decode String](https://leetcode.com/problems/decode-string/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {string} s
 * @return {string}
 */
let decodeString = s => {
    let stack = [], curStr = '', curDigit = '';

    for(const char of s) {
        if(char === '[') {
            stack.push(curStr);
            stack.push(curDigit);
            curStr = '';
            curDigit = '';
        } else if(char === ']') {
            const num = stack.pop();
            let preStr = stack.pop();
            for(let i=0; i<Number(num); i++) {
                preStr += curStr;
            }
            curStr = preStr;
        } else if (!isNaN(char)) {
            curDigit += char
        } else {
            curStr += char;
        }
    }
    return curStr;
};
```
