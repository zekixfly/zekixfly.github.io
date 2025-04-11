---
title: "Reverse Linked List"
date: 2025-04-11 10:07:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=leetcode-75)

**My solution:**
```js
/**
 *  
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = head => {
    let node = null;
    while(head !== null) {
        const temp = head.next;
        head.next = node;
        node = head;
        head = temp;
    }
    return node;    
}
```
