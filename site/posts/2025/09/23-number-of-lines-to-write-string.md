---
title: "Number of Lines To Write String"
date: 2025-09-23 10:40:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [806. Number of Lines To Write String](https://leetcode.com/problems/number-of-lines-to-write-string/description/)

**My solution:**
```js
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
let numberOfLines = (widths, s) => {
    let result = [0, 0];
    if(s.length === 0) return result;
    result[0] = 1;
    const letterWitdhMap = {
        'a': widths[0],
        'b': widths[1],
        'c': widths[2],
        'd': widths[3],
        'e': widths[4],
        'f': widths[5],
        'g': widths[6],
        'h': widths[7],
        'i': widths[8],
        'j': widths[9],
        'k': widths[10],
        'l': widths[11],
        'm': widths[12],
        'n': widths[13],
        'o': widths[14],
        'p': widths[15],
        'q': widths[16],
        'r': widths[17],
        's': widths[18],
        't': widths[19],
        'u': widths[20],
        'v': widths[21],
        'w': widths[22],
        'x': widths[23],
        'y': widths[24],
        'z': widths[25],
    };
    for(let i=0; i<s.length; i++) {
        result[1] += letterWitdhMap[s[i]];
        if(result[1] > 100) {
            result[0]++;
            result[1] = letterWitdhMap[s[i]];
        }
    }
    return result;
};
```
