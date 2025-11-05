---
title: "Uncommon Words from Two Sentences"
date: 2025-11-05 10:32:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode 題目: [884. Uncommon Words from Two Sentences](https://leetcode.com/problems/uncommon-words-from-two-sentences/description/)

**My solution:**

```js
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
let uncommonFromSentences = (s1, s2) => {
  const zipArray = s1.split(" ").concat(s2.split(" "));
  let map = new Map();
  for (let i = 0; i < zipArray.length; i++) {
    map.has(zipArray[i])
      ? map.set(zipArray[i], map.get(zipArray[i]) + 1)
      : map.set(zipArray[i], 1);
  }
  return Array.from(map)
    .filter(([key, value]) => value === 1)
    .map(([key, value]) => key);
};
```
