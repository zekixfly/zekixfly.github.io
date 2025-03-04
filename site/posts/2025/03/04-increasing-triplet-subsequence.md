---
title: "Increasing Triplet Subsequence"
date: 2025-03-04 10:12:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [334. Increasing Triplet Subsequence](https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let increasingTriplet = nums => {
    let smallest = Number.MAX_VALUE, smaller = Number.MAX_VALUE;
    for(let num of nums) {
        if(num <= smallest) smallest = num;
        else if(num <= smaller) smaller = num; 
        else return true;
    }
    return false;
}
```
