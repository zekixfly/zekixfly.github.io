---
title: "Relative Sort Array"
date: 2026-08-23 09:42:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode 題目: [1122. Relative Sort Array](https://leetcode.com/problems/relative-sort-array/description/)

**My solution:**

```js
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
let relativeSortArray = (arr1, arr2) => {
    let left = 0, right = 0, stack = [];
    while(right < arr2.length){
        arr1[left] === arr2[right] ? stack.push(arr1.splice(left, 1).at(0)) : left++;    
        if(left >= arr1.length){
            left = 0;
            right++;
        }
    }
    arr1.sort((a, b) => a - b);
    return stack.concat(arr1);
};
```