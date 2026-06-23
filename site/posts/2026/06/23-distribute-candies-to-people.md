---
title: "Distribute Candies to People"
date: 2026-06-23 23:39:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode 題目: [1103. Distribute Candies to People](https://leetcode.com/problems/distribute-candies-to-people/description/)

**My solution:**

```js
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let result = Array(num_people).fill(0);
    let pointer = 1;
    while(candies > 0) {
        for (let i = 0; i < num_people && candies > 0; i++) {
            result[i] += Math.min(pointer, candies);
            candies -= pointer;
            pointer++;
        }
    }
    return result;
}
```