---
title: "Group By"
date: 2025-04-11 13:57:00 +8
tags: [VanillaJS]
#spell-checker: disable
---

> LeetCode題目: [2631. Group By](https://leetcode.com/problems/group-by/description/?envType=study-plan-v2&envId=30-days-of-javascript)

**My solution:**
```js
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let groups = {};
    for(let item of this) {
        const key = fn(item);
        groups[key] ? groups[key].push(item) : groups[key] = [item];
    }
    return groups;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
```
