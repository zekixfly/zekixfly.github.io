---
title: "Unique Email Addresses"
date: 2026-04-23 20:43:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode 題目: [929. Unique Email Addresses](https://leetcode.com/problems/unique-email-addresses/description/)

**My solution:**

```js
/**
 * @param {string[]} emails
 * @return {number}
 */
let numUniqueEmails = (emails) => {
    let set = new Set;
    for(let i=0; i<emails.length; i++){
        let [local, domain] = emails[i].split('@');
        local = local.replace(/\./g , '').replace(/\+.*/g, '');
        set.add(`${local}@${domain}`);
    }
    return set.size;
};
```
