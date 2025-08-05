---
title: "Baseball Game"
date: 2025-08-05 14:14:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [682. Baseball Game](https://leetcode.com/problems/baseball-game/description/)

**My solution:**
```js
/**
 * @param {string[]} operations
 * @return {number}
 */
let calPoints = operations => {
    let stack = [];
    for(let i=0; i<operations.length; i++) {
        switch(operations[i]) {
            case 'C':
                stack.pop();
                break;
            case 'D':
                stack.push(stack.at(-1)*2);
                break;
            case '+':
                stack.push(stack.at(-2)+stack.at(-1));
                break;
            default:
                stack.push(Number(operations[i]));
        }
    }
    return stack.reduce((acc, curr) => acc + Number(curr), 0);
};
```
