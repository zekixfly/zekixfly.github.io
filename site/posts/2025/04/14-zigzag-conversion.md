---
title: "Zigzag Conversion"
date: 2025-04-14 17:06:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [6. Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/description/)

**My solution:**
```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = (s, numRows) => {
    let stack = [], count = 0, ASSwitch = true;
    for(const char of s) {
        stack[count] ? stack[count].push(char) : stack[count] = [char];
        if(ASSwitch) {
            ++count;
            if(count === numRows - 1) ASSwitch = false;
        }
        else {
            --count;
            if(count === 0) ASSwitch = true;
        }
    }
    return stack.flat().join('');
};
```
