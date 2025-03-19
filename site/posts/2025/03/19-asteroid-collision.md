---
title: "Asteroid Collision"
date: 2025-03-19 11:19:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [735. Asteroid Collision](https://leetcode.com/problems/asteroid-collision/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
let asteroidCollision = asteroids => {
    let pointer = 0, stateStack = [];
    while(pointer < asteroids.length) {
        if(asteroids[pointer] > 0) stateStack.push(asteroids[pointer]);
        else if(stateStack.length === 0 || stateStack.slice(-1)[0] < 0) stateStack.push(asteroids[pointer]);
        else if(stateStack.slice(-1)[0] <= Math.abs(asteroids[pointer])) {
            if(stateStack.slice(-1)[0] < Math.abs(asteroids[pointer])) pointer--;
            stateStack.pop();
        }
        pointer++;
    }
    return stateStack;
}
```
