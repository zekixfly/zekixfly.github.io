---
title: "Kids With the Greatest Number of Candies"
date: 2025-01-14 16:50:00 +7
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [1431. Kids With the Greatest Number of Candies](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
let kidsWithCandies = (candies, extraCandies) => candies.map(v => (v + extraCandies) >= Math.max(...candies) ? true : false );
```
