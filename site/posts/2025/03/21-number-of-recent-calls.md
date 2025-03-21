---
title: "Number of Recent Calls"
date: 2025-03-21 15:19:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [933. Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js

let RecentCounter = function() {
    this.requests = new Array;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    while(this.requests[0] < t-3000) this.requests.shift();
    return this.requests.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```
