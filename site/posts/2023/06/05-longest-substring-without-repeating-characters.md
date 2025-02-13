---
title: "Longest Substring Without Repeating Characters"
date: 2023-06-05 16:57:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/?envType=problem-list-v2&envId=rewycgxm)

**My solution:**
```js
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = s => {
    let left = 0, right = 0, length = 0, longestLength = 0, answer = '';
    while(right <= s.length-1){
        if(!s.slice(left,right+1).includes(s[right+1])) {
            length = s.slice(left,right+2).length;
            if(length > longestLength) {
                longestLength = length;
                answer = s.slice(left,right+2);
            }
            right++;
        }
        else if(s.slice(left,right+1).includes(s[right+1])) left++;
    }
    console.log(answer);
    return longestLength;
};
```
