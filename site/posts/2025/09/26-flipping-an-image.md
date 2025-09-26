---
title: "Flipping an Image"
date: 2025-09-26 11:26:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [832. Flipping an Image](https://leetcode.com/problems/flipping-an-image/description/)

**My solution:**
```js
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
let flipAndInvertImage = image => image.map(arr => arr.reverse().map(pixel => pixel ? 0 : 1 ));
```
