---
title: "Maximum Twin Sum of a Linked List"
date: 2025-04-15 11:13:00 +8
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
    let max = 0;
    let node = null;
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        const temp = slow.next;
        slow.next = node;
        node = slow;
        slow = temp
    }
    while(slow !== null) {
        max = Math.max(max, slow.val + node.val);
        slow = slow.next;
        node = node.next;
    }
    return max;
}
```
