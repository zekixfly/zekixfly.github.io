---
title: "Reshape the Matrix"
date: 2025-09-04 14:24:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [566. Reshape the Matrix](https://leetcode.com/problems/reshape-the-matrix/description/)

**My solution:**
```js
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
let matrixReshape = (mat, r, c) => {
    let result = [], tmpArr = [];
    let flatMat = mat.flat();
    if(flatMat.length === r * c) {
        for(let i=0; i<r; i++) {
            for(let j=0; j<c; j++){
                tmpArr.push(flatMat.shift());
            }
            result.push(tmpArr);
            tmpArr = [];
        }
        return result
    } else return mat;
};
```
