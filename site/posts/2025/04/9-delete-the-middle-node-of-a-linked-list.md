---
title: "Delete the Middle Node of a Linked List"
date: 2025-04-09 11:48:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [2095. Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/?envType=study-plan-v2&envId=leetcode-75)

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
 * @return {ListNode}
 */
let deleteMiddle = head => {
    if(head === null || head.next === null) return null;
    let slow = head;
    let fast = head.next;
    while(fast !== null && fast.next !== null && fast.next?.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next?.next;
    return head;
};
```
