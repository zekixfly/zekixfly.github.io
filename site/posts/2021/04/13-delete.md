---
title: "delete不可刪除的東西"
date: 2021-04-13 11:24:00 +8
tags: [VanillaJS]
#spell-checker: disable
---

```js
//只要是宣告過後的變數都不能刪除! 如:var、let、const、function，什麼意思呢? 舉例如下:
var thisVar = "I'm Var";
delete thisVar; //return false

let thisLet = "I'm Let";
delete thisLet; //return false

const thisConst = "I'm Const";
delete thisConst; //return false

function thisFunction() {
  console.log("I'm Funciton");
}
delete thisFunction; //return false
```

```js
//但是如果沒有宣告就可以刪除，舉例如下:
thisUndeclaredVar = "I'm UndeclaredVar";
delete thisUndeclaredVar; //return true

thisUndeclaredFunction = function () {
  console.log("I'm UndeclaredFunciton");
};
delete thisUndeclaredFunction; //return true

//雖然物件本身不能刪除，但裡頭的屬性(變數)可以刪除，舉例如下:
var obj = {
  a: "a",
  b: "b",
  c: "c",
};
delete obj; //return false
delete obj.a; //return true
```

```js
//那你妳可能會想問，我到底該如何知道所有的東西哪些能刪哪些不能刪呢?
//來吧，來下一個關鍵Object.getOwnPropertyDescriptor(物件,'屬性');的指令妳就明瞭了!

Object.getOwnPropertyDescriptor(window, "obj");
/* return:
{
 configurable: false, //configurable中文翻成"可配置的"，所以當true時代表可刪除，false代表不可刪除。
 enumerable: true,
 value: {a: "a", b: "b", c: "c"},
 writable: true
}
*/

Object.getOwnPropertyDescriptor(window.obj, "a");
/* return:
{
 configurable: true,
 enumerable: true,
 value: "a",
 writable: true
}
*/
```

```js
//更好的方法是使用Object.defineProperty來宣告configurable是否可以被刪除。且在嚴格模式(use stirct)下，不宣告的變數會出錯，例如:
"use strict";
thisUndeclaredVar = "I'm UndeclaredVar";
//Uncaught ReferenceError: thisUndeclaredVar is not defined

//所以使用Object.defineProperty來宣告configurable是否可以被刪除，在嚴格模式下才不會有錯誤。
("use strict");
Object.defineProperty(window, "thisUndeclaredVar", {
  value: "I'm UndeclaredVar",
  configurable: true,
});

delete thisUndeclaredVar; // return true
```

---

`PS. Object.defineProperty 裡有四種屬性可以設定。`

> configurable: `true` or `false`
> enumerable: `true` or `false`
> value: `Number` or `"string"` or `Function` or `Boolean` or `Object`...etc.
> writable: `true` or `false`

1. **configurable**
   `該屬性是否可刪除。true 代表可以 delete，false 則不行。`

2. **enumerable**
   `該屬性是否可列舉。一樣 true 代表可列舉，false 則不行。通常使用 for...in 及 Object.keys()的情況下，可能會意外的多列印出 prototype 自己所設定的屬性，所以使用 Object.defineProperty 來設定在 prototype 自訂屬性裡的 enumerable 為 false，就不會列印出來了。`

3. **value**
   `這就不用多講了，跟一般宣告變數給值一樣。`

4. **writable**
   `該屬性值是否可以覆寫。true 代表可以覆寫，false 則不行。`
