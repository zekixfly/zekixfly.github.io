---
title: "Removing Stars From a String"
date: 2025-02-25 15:09:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [2390. Removing Stars From a String](https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {string} s
 * @return {string}
 */
let removeStars = s => {
    let res = '', count = 0;
    for(let i=s.length-1; i>=0; i--) {
        s[i] === '*' 
            ?  count++
            :  count === 0 ? res = s[i] + res : count--;
    }
    return res;
};
```
