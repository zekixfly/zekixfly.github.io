---
title: "三元運算子 (Conditional operator)"
date: 2021-04-09 21:03:00 +8
tags: [VanillaJS]
#spell-checker: disable
---

```js
//三元運算子常常被做為if的簡潔寫法

function yourAge(age) {
  console.log(`(三元運算子)你的年齡大於18歲嗎? ${age > 18 ? "是" : "否"}`);
}

yourAge(33); //result: (三元運算子)你的年齡大於18歲嗎? 是

yourAge(18); //result: (三元運算子)你的年齡大於18歲嗎? 否
```

```js
//原本if的寫法

function ifYourAge(age) {
  if (age > 18) {
    console.log(`(if-else)你的年齡大於18歲嗎? 是`);
  } else {
    console.log(`(if-else)你的年齡大於18歲嗎? 否`);
  }
}

ifYourAge(33); //result: (if-else)你的年齡大於18歲嗎? 是

ifYourAge(18); //result: (if-else)你的年齡大於18歲嗎? 否
```
