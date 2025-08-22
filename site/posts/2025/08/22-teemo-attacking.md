---
title: "Teemo Attacking"
date: 2025-08-22 14:16:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [495. Teemo Attacking](https://leetcode.com/problems/teemo-attacking/description/)

**My solution:**
```js
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
let findPoisonedDuration = (timeSeries, duration) => {
    let totalSeconds = 0, diff;    
    for(let i=0; i<timeSeries.length - 1; i++) {
        diff = timeSeries[i+1] - timeSeries[i];
        totalSeconds += diff > duration ? duration : diff;
    }
    return totalSeconds + duration;
};
```
