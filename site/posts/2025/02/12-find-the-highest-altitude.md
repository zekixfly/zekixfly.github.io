---
title: "Find the Highest Altitude"
date: 2025-02-12 16:57:00 +7
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [1732. Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} gain
 * @return {number}
 */
let largestAltitude = gain => {
    let tempValue = 0;
    return Math.max(0, ...gain.map(altitude => tempValue += altitude));
};
```
