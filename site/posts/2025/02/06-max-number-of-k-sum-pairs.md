---
title: "Max Number of K-Sum Pairs"
date: 2025-02-06 16:32:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [1679. Max Number of K-Sum Pairs](https://leetcode.com/problems/max-number-of-k-sum-pairs/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let maxOperations = (nums, k) => {
    let left = 0, right = nums.length - 1, operationsCount = 0 ;
    nums.sort((a, b) => a - b);
    while(left < right){
        if(nums[left] + nums[right] === k) {
            operationsCount++;
            left++;
            right--;
        }else {
            (nums[left] + nums[right]) < k ? left++ : right--;
        }
    }
    return operationsCount;
};
```
