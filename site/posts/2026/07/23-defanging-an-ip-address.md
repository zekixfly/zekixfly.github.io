---
title: "Defanging an IP Address"
date: 2026-07-23 15:23:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode 題目: [1108. Defanging an IP Address](https://leetcode.com/problems/defanging-an-ip-address/description/)

**My solution:**

```js
/**
 * @param {string} address
 * @return {string}
 */
let defangIPaddr = (address) => address.split(".").join("[.]");
```