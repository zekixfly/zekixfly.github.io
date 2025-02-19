---
title: "Unique Number of Occurrences"
date: 2025-02-19 10:13:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [1207. Unique Number of Occurrences](https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} arr
 * @return {boolean}
 */
let uniqueOccurrences = arr => {
    let lengthList = [];
    const arrSet = new Set(arr);
    for (const setV of arrSet) {
        let elementLength = arr.filter(v => v === setV).length;
        if(lengthList.includes(elementLength)) {
            return false;
        } else {
            lengthList.push(elementLength);
        }
    }
    return true;
};
```
