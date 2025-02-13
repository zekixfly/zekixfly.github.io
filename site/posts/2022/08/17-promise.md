---
title: "解決callback hell的新方法Promise"
date: 2022-08-17 18:47:00 +8
tags: [VanillaJS]
#spell-checker: disable
---

```js
//方法一: 使用Promise的then方法
let fakeAjax = (url, sec) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Ajax ${url} OK!`);
    }, sec);
  });

fakeAjax("api/1", 5000)
  .then((value) => {
    console.log(value);
    return fakeAjax("api/2", 3000);
  })
  .then((value) => {
    console.log(value);
    return fakeAjax("api/3", 1000);
  })
  .then((value) => {
    console.log(value);
  });
```

```js
//方法二: 使用async/await方法
let fakeAjax = (url, sec) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Ajax ${url} OK!`);
    }, sec);
  });

const res1 = await fakeAjax("api/1", 5000);
console.log(res1);
const res2 = await fakeAjax("api/2", 3000);
console.log(res2);
const res3 = await fakeAjax("api/3", 1000);
console.log(res3);
```

---

`PS. 當Pomise的實例物件狀態改變(這裡指的是fakeAjax)，then方法裡的成功/失敗的回調函式才會被調用，狀態改變的方式有三種，再 Promise 的回調函式裡調用了:`

1.

```js
reslove(); //[[PromiseState]]:fulfilled
```

2.

```js
reject(); //[[PromiseState]]:fulfilled
```

3.

```js
throw "出現問題!"; //[[PromiseState]]:rejected
```
