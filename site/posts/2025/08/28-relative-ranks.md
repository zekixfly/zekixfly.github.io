---
title: "Relative Ranks"
date: 2025-08-28 16:19:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [506. Relative Ranks](https://leetcode.com/problems/relative-ranks/description/)

**My solution:**
```js
/**
 * @param {number[]} score
 * @return {string[]}
 */
let findRelativeRanks = score => {
    let indexScore = score.map((item, idx) => [idx, item]);
    indexScore.sort((a, b) =>  b[1] - a[1]);
    for(let i=0; i<indexScore.length; i++) {
        let index = indexScore[i][0];
        if(i === 0) score[index] = 'Gold Medal';
        else if(i === 1) score[index] = 'Silver Medal';
        else if(i === 2) score[index] = 'Bronze Medal';
        else score[index] = `${i+1}`;
    }
    return score;
};
```
