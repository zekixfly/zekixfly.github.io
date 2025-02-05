---
title: "Move Zeroes"
date: 2025-02-05 09:50:00 +7
tags: [VanillaJS, LeetCode]
#spell-checker: disable
---

> LeetCode題目: [283. Move Zeroes](https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
Array.prototype.findIndexAll = function(fn) {
    let indexList = [];
    this.forEach((item, idx) => fn(item) === true && indexList.push(idx));
    return indexList;
}
let moveZeroes = nums => nums.findIndexAll(v=>v===0).reverse().forEach(idx => {
    nums.splice(idx, 1);
    nums.push(0)
});
```
