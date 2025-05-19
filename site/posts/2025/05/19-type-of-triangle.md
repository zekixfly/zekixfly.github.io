---
title: "Type of Triangle"
date: 2025-05-19 16:42:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [3024. Type of Triangle](https://leetcode.com/problems/type-of-triangle/description/?envType=daily-question&envId=2025-05-19)

**My solution:**
```js
/**
 * @param {number[]} nums
 * @return {string}
 */
let triangleType = nums => {
    if(nums.length !== 3) return 'none';
    const [a, b, c] = nums;
    if(a == b && b == c && c == a) {
        return 'equilateral';
    } else if((a === b && a + b > c) || (b === c && b + c > a) || (c === a && c + a > b)) {
        return 'isosceles';
    } else if((a + b > c) && (b + c > a) && (c + a > b)) {
        return 'scalene';
    } else {
        return 'none';
    }
};
```
