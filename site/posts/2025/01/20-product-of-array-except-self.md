---
title: "Product of Array Except Self"
date: 2025-01-20 15:18:00 +7
tags: [VanillaJS, LeetCode]
#spell-checker: disable
---

> LeetCode題目: [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = nums => {
    if(!nums.includes(0)) {
        const totalProduct = nums.reduce((prev, curr) => prev = parseFloat(prev * curr), 1);
        return nums.map(v => totalProduct/v);
    }else {
       return nums.map((v, idx, arr) => {
            if(v !== 0) {
                return 0;
            }else {
                if(arr.findLastIndex(v => v === 0) === idx) {
                    const deepCloneArr = Array.from(arr);
                    deepCloneArr.splice(idx, 1);
                    return deepCloneArr.reduce((prev, curr) => prev = parseFloat(prev * curr), 1);
                }else {
                    return 0;
                }
            }
        });
    }   
}
```
