---
title: "Search Insert Position"
date: 2025-06-13 10:42:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/description/)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = (nums, target) => {
    let findIdx = nums.indexOf(target);
    if(findIdx !== -1) {
        return findIdx;
    } else {
        nums.push(target);
        nums.sort((a, b) => a - b);
        return nums.indexOf(target);
    }
}
```
