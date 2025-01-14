---
title: "Two Sum"
date: 2023-06-01 09:32:00 +7
tags: [VanillaJS, LeetCode]
#spell-checker: disable
---

> LeetCode題目: [1. Two Sum](https://leetcode.com/problems/two-sum/description/?envType=problem-list-v2&envId=rewycgxm)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    nums = Object.entries(nums).sort((itemA,itemB)=>itemA[1]-itemB[1]);
    let left = 0, right = nums.length-1;
    while(left < right) {
        if(nums[left][1] + nums[right][1] < target) left++;
        else if(nums[left][1] + nums[right][1] > target) right--;
        else if(nums[left][1] + nums[right][1] === target) return [nums[left][0], nums[right][0]];
    }
};
```
