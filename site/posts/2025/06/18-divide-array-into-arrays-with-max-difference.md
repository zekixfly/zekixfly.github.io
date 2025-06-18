---
title: "Divide Array Into Arrays With Max Difference"
date: 2025-06-18 14:46:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [2966. Divide Array Into Arrays With Max Difference](https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/?envType=daily-question&envId=2025-06-18)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
const divideArray = (nums, k) => {
    const newArr = [];
    nums.sort((a, b) => a - b);
    for(let i=0; i<nums.length-2; i+=3) {
        if(nums[i+2] - nums[i] > k) return [];
        newArr.push([nums[i], nums[i+1], nums[i+2]]);
    }
    return newArr
};
```
