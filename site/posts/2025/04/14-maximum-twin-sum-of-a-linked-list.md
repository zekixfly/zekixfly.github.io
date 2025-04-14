---
title: "Maximum Twin Sum of a Linked List"
date: 2025-04-14 13:55:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [2130. Maximum Twin Sum of a Linked List](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
let pairSum = head => {
    let stack = [];
    let max = 0;
    while(head !== null) {
        stack.push(head.val);
        head = head.next;
    }
    for(let i=0; i<stack.length/2; i++) {
        max = Math.max(max, stack[i] + stack[stack.length-1-i])
    }
    return max;
};
```
