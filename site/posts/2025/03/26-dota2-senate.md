---
title: "Dota2 Senate"
date: 2025-03-26 16:34:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [649. Dota2 Senate](https://leetcode.com/problems/dota2-senate/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * @param {string} senate
 * @return {string}
 */
let predictPartyVictory = senate => {
    let senators = Array.from(senate);

    const banOneSenator = (character, fromIndex = 0) => {
        const index = senators.indexOf(character, fromIndex) !== -1 ? senators.indexOf(character, fromIndex) : senators.indexOf(character);
        if(index !== -1) senators.splice(index, 1, '');
    }

    while(senators.includes('R') && senators.includes('D')) {
        for(let idx in senators) {
            senators[idx] === 'R' 
                ? banOneSenator('D', idx) 
                : senators[idx] === 'D' && banOneSenator('R', idx);   
        }
        senators = Array.from(senators.join(''));
    }
    
    return senators.includes('R') ? 'Radiant' : 'Dire';
};
```
