---
title: "Unique Morse Code Words"
date: 2025-09-22 11:37:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode題目: [804. Unique Morse Code Words](https://leetcode.com/problems/unique-morse-code-words/description/)

**My solution:**
```js
/**
 * @param {string[]} words
 * @return {number}
 */
let uniqueMorseRepresentations = words => {
    const letter2MorseDict = {
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..',
    }
    return new Set(words.map(letter => letter.replace(/./g, char => letter2MorseDict[char]))).size;
};
```
