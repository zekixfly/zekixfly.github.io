---
title: "bind和call、apply的差別"
date: 2021-04-11 12:14:00 +7
tags: [VanillaJS]
#spell-checker: disable
---

```js
//bind有兩種方式，第一種是綁定物件，第二種是綁定函式中的參數，綁定完會回傳綁定後的函式。

//bind第一種，綁定物件。

var msg = "Window(global) msg";

//在還沒綁定物件時，此時printLog這個函式裡的this指向的是全域的window(nodejs裡是global)

function printLog(msg) {
  console.log(this.msg);
}

var scope = {
  msg: "Scope msg",
};
var scopePrintLog = printLog.bind(scope); //綁定scope物件後，此時printLog這個函式裡的this指向的是scope這個物件，但bind不會立即執行函式，而是把綁定物件後的函式回傳存入scopePrintLog變數裡。

printLog();
//result: Window(global) msg

scopePrintLog();
//result: Scope msg

//bind第二種，綁定函式中的參數。

function sum(a, b) {
  return a + (b || 0);
}

var bindPlusOne = sum.bind(this, 1); //綁定sum這個函數的參數，依照你想綁定幾個參數，這裡只輸入一個數字1，所以只有綁定sum函數中的參數a，此時的sum函數變成像是這樣:

/*function sum(b) {

  return 1 + (b||0)

}*/

//一樣bind不會立即執行函式，而是把綁定參數後的函數回傳存入bindPlusOne變數裡。

sum(5, 5);
//result: 10

bindPlusOne();
//result: 1

bindPlusOne(6);
//result: 7
```

```js
//call、apply和bind很類似，但這兩個方法與bind的最大差別在於，call和apply在綁定完物件或參數後會立即執行函式，而不是回傳綁定後的函式。
//同上例子，只是把bind換成call和apply:

function sum(a, b) {
  return a + (b || 0);
}

var bindPlusOne = sum.call(this, 1); //綁定sum這個函數的參數，依照你想綁定幾個參數，這裡只輸入一個數字1，所以只有綁定sum函數中的參數a，此時的sum函數變成像是這樣:

/*(function sum(b) {

  return 1 + (b||0)

}())*/

//跟bind不一樣的地方是call綁定完會立即執行函式，然後再執行的函式裡如果有retrun，才會回傳運算的結果，否則不會回傳。

bindPlusOne();
//result: Uncaught TypeError: bindPlusOne is not a function

bindPlusOne(6);
//result: Uncaught TypeError: bindPlusOne is not a function

bindPlusOne;
//result: 1
//所以你會發現在執行call的同時他不僅綁定了函數裡面的參數，綁定完還立即執行了函式。
```

```js
//apply與call類似，只是傳入的參數的形式不同。
//同上例子，只是把call換成apply:

function sum(a, b) {
  return a + (b || 0);
}

var bindPlusOne = sum.apply(this, [1]);

//這裡apply和call的差別只在於，呼叫call函式時call在this後面的參數是逐項輸入參數，而apply是在this後面的參數只需要輸入一個陣列的參數。所以apply會自動解構陣列為個別值，而call則不會。
```
