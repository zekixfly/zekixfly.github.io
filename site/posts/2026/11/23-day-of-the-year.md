---
title: "Day of the Year"
date: 2026-11-23 17:25:00 +8
tags: [LeetCode]
#spell-checker: disable
---

> LeetCode 題目: [1154. Day of the Year](https://leetcode.com/problems/day-of-the-year/description/)

**My solution:**

```js
/**
 * @param {string} date
 * @return {number}
 */
let dayOfYear = date => {
    // 快速口訣：一三五七八十臘（12月），三十一天永不差；四六九冬（11月）三十日，唯有二月二十八（閏年二十九）。
    const [year, month, day] = date.split('-').map(str=>Number(str));
    if(month <= 1) return day;
    let febDayNum = 28;
    if(year % 100 !== 0 && year % 4 === 0 || year % 100 === 0 && year % 400 === 0) febDayNum = 29;
    const gregorianCalendar = [31,febDayNum,31,30,31,30,31,31,30,31,30,31];
    let yearDayNum = 0;
    for(let i=0; i<month-1; i++) yearDayNum += gregorianCalendar[i];
    return yearDayNum += day;
};
```