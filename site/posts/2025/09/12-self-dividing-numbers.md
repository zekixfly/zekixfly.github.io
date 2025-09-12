---
title: "Self Dividing Numbers"
date: 2025-09-12 09:56:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [728. Self Dividing Numbers](https://leetcode.com/problems/self-dividing-numbers/description/)

**My solution:**
```js
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
let selfDividingNumbers = (left, right) => {
    let res = [], selfD = true;
    for(left; left<=right; left++) {
        selfD = true;
        let strDigit = left.toString();
        for(let i=0; i<strDigit.length; i++) {
            if (left % Number(strDigit.at(i)) !== 0) {
                selfD = false;
                break;
            }
        }
        if(selfD) res.push(left);
    }
    return res;
};
```
