---
title: "Longest Consecutive Sequence"
date: 2025-04-23 17:28:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=problem-list-v2&envId=rewycgxm)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
let longestConsecutive = nums => {
    if(nums.length === 0) return 0;
    let max = 0, consecutive = 0;
    let sortNums = nums.sort((a, b) => a - b);
    for(let i=0; i<sortNums.length; i++) {
        if(sortNums[i] === sortNums[i-1]) continue;
        (sortNums[i] === sortNums[i-1]+1) ? consecutive++ : consecutive = 1;
        max = Math.max(max, consecutive);
    }
    return max;
};
```
