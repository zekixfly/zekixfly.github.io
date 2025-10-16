---
title: "Binary Gap"
date: 2025-10-16 15:53:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [868. Binary Gap](https://leetcode.com/problems/binary-gap/description/)

**My solution:**
```js
/**
 * @param {number} n
 * @return {number}
 */
let binaryGap = n => {
    let max = 0, indexArray = [];
    const binary = n.toString(2);
    for(let i=0; i<binary.length; i++) {
        if(binary[i] === '1') {
            if(indexArray.length) max =  Math.max(max, Number(i) - Number(indexArray.slice(-1)));
            indexArray.push(i);
        }
    }
    return max;    
};
```
