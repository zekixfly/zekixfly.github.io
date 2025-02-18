---
title: "Unique Number of Occurrences"
date: 2025-02-18 11:23:00 +8
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
Array.prototype.findAll = function(fn) {
    let elementList = [];
    this.forEach((item, idx) => fn(item) === true && elementList.push(item));
    return elementList;
}
let uniqueOccurrences = arr => {
    let lengthList = [];
    const arrSet = new Set(arr);
    for (const setV of arrSet) {
        let elementLength = arr.findAll(v => v === setV).length;
        if(lengthList.includes(elementLength)) {
            return false;
        } else {
            lengthList.push(elementLength);
        }
    }
    return true;
};
```
