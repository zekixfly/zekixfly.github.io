---
title: "Container With Most Water"
date: 2023-08-17 21:20:00 +7
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/description/?envType=problem-list-v2&envId=rewycgxm)

**My solution:**
```js
/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = height => {
    let maxWaterStore = 0, left = 0, right = height.length - 1;
    while (left < right) {
        maxWaterStore = Math.max(maxWaterStore, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            ++left;
        } else {
            --right;
        }
    }
    return maxWaterStore;
};
```
