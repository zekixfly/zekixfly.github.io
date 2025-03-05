---
title: "String Compression"
date: 2025-03-05 11:38:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [443. String Compression](https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {character[]} chars
 * @return {number}
 */
let compress = chars => {
    let writePointer = 0; maxSize = chars.length;
    for(let startPointer = 0, endPointer = 0; startPointer < maxSize; startPointer = endPointer) {
        while(endPointer < maxSize && chars[endPointer] === chars[startPointer]) endPointer++;
        chars[writePointer++] = chars[startPointer];
        let readSize = endPointer - startPointer;
        if(readSize === 1) continue;
        for (let digitChar of String(readSize)) chars[writePointer++] = digitChar;
    }
    return writePointer;
}
```
