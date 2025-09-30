---
title: "Transpose Matrix"
date: 2025-09-30 14:49:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [867. Transpose Matrix](https://leetcode.com/problems/transpose-matrix/description/)

**My solution:**
```js
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
let transpose = matrix => {
    let m = matrix.length, n = matrix[0].length;
    let result = new Array(n).fill(null).map(()=>[]);
    for(let i=0; i<m; i++) {
        for (let j = 0; j<n; j++) {
            result[j].push(matrix[i][j]);
        }
    }
    return result;
};
```
