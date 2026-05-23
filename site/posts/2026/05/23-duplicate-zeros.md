---
title: "Duplicate Zeros"
date: 2026-05-23 23:07:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode 題目: [1089. Duplicate Zeros](https://leetcode.com/problems/duplicate-zeros/description/)

**My solution:**

```js
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
let duplicateZeros = arr => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0 && i != arr.length-1) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        }
    }
};
```
