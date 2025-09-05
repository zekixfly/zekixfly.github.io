---
title: "Distribute Candies"
date: 2025-09-05 11:52:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [575. Distribute Candies](https://leetcode.com/problems/distribute-candies/description/)

**My solution:**
```js
/**
 * @param {number[]} candyType
 * @return {number}
 */
let distributeCandies = candyType => {
    let types = new Set(candyType);
    const halfCandy = candyType.length / 2;
    if(types.size >= halfCandy) return halfCandy;
    else return types.size;
};
```
