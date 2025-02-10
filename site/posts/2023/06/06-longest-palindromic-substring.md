---
title: "Longest Palindromic Substring"
date: 2023-06-06 22:12:00 +7
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/description/?envType=problem-list-v2&envId=rewycgxm)

**My solution:**
```js
/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = s => {
    if(s.length < 2) return s;
    let n = s.length, maxLen = 0, maxLenStartIdx = 0;
    let pointer = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--; right++;    
        }
        if((right - left - 1) > maxLen){
            maxLen = right - left - 1;
            maxLenStartIdx = left + 1;
        }
    };
    for(let i=0; i<n-1 ; i++){
        pointer(i,i);//odd
        pointer(i,i+1);//even
    }
    return s.slice(maxLenStartIdx, maxLenStartIdx+maxLen);
}
```
