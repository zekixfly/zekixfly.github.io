---
title: "Fair Candy Swap"
date: 2025-12-12 19:27:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode 題目: [888. Fair Candy Swap](https://leetcode.com/problems/fair-candy-swap/description/)

**My solution:**

```js
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
let fairCandySwap = (aliceSizes, bobSizes) => {
  let aliceSum = aliceSizes.reduce((acc, curr) => acc + curr, 0);
  let bobSum = bobSizes.reduce((acc, curr) => acc + curr, 0);
  for (let i = 0; i < aliceSizes.length; i++) {
    for (let j = 0; j < bobSizes.length; j++) {
      if (aliceSum - bobSum === -2 * bobSizes[j] + 2 * aliceSizes[i])
        return [aliceSizes[i], bobSizes[j]];
    }
  }
};
```
