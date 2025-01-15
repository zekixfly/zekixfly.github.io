---
title: "Can Place Flowers"
date: 2025-01-15 15:02:00 +7
tags: [VanillaJS, LeetCode]
#spell-checker: disable
---

> LeetCode題目: [605. Can Place Flowers](https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
let canPlaceFlowers = (flowerbed, n) => {
    let cloneFlowerbed = [...flowerbed], last = n;
    if(cloneFlowerbed.length < 1 || cloneFlowerbed.length > 2*Math.pow(10,4)) return 'flowerbed\'s length error!';
    if(last < 0 || last > cloneFlowerbed.length) return 'new flowers\' length error';
    for(let i= 0; i<cloneFlowerbed.length; i++) {
        if(![0,1].includes(cloneFlowerbed[i])) return 'flowerbed\'s array just only type 0 or 1'
        if((cloneFlowerbed[i-1] === 0 || cloneFlowerbed[i-1] === undefined) && cloneFlowerbed[i] === 0 && (cloneFlowerbed[i+1] === 0 || cloneFlowerbed[i+1] === undefined) && last > 0) {
            cloneFlowerbed[i] = 1;
            last--;
        }
    }
    return last === 0 ? true : false;
};
```
