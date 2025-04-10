---
title: "Odd Even Linked List"
date: 2025-04-09 11:48:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [328. Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/description/?envType=study-plan-v2&envId=leetcode-75)

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
let oddEvenList = head => {
    if(head === null || head.next === null) return head;
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while(even!== null && even.next !== null) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head
};
```
