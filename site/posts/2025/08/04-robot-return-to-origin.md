---
title: "Robot Return to Origin"
date: 2025-08-04 14:19:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [657. Robot Return to Origin](https://leetcode.com/problems/robot-return-to-origin/description/)

**My solution:**
```js
/**
 * @param {string} moves
 * @return {boolean}
 */
let judgeCircle = moves => {
    let originPostion = [0, 0];
    const moveDict = {
        'R': 1,
        'L': -1,
        'U': 1,
        'D': -1,
    }
    for(let i=0; i<moves.length; i++) {
        if(moves[i] === 'R' || moves[i] === 'L') originPostion[0] += moveDict[moves[i]];
        else if(moves[i] === 'U' || moves[i] === 'D') originPostion[1] += moveDict[moves[i]];
    }
    const [x, y] = originPostion;
    return (x === 0 && y === 0);
};
```
