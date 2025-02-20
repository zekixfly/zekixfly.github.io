---
title: "Equal Row and Column Pairs"
date: 2025-02-20 16:27:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [2352. Equal Row and Column Pairs](https://leetcode.com/problems/equal-row-and-column-pairs/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
let equalPairs = grid => {
    let total = 0;
    let rows = grid.map(item=>item.join());
    let columns = grid.map((_,i) => grid.map(item => item[i]).join());
    const getMap = arrData => {
        let map = new Map();
        arrData.forEach(arrString => map.has(arrString) ? map.set(arrString, map.get(arrString)+1) : map.set(arrString, 1));
        return map;
    }
    const rowsMap = getMap(rows);
    const columnsMap = getMap(columns);
    rowsMap.forEach((count, key) => columnsMap.has(key) && (total += columnsMap.get(key)*count));
    return total;
}
```
