---
title: "JavaScript的Eventloop"
date: 2025-01-08 14:32:00 +7
tags: [VanillaJS]
#spell-checker: disable
---

# 事件循環(Event Loop)

> 參考出處: [https://www.explainthis.io/zh-hant/swe/what-is-event-loop](https://www.explainthis.io/zh-hant/swe/what-is-event-loop)

![test](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop/the_javascript_runtime_environment_example.svg)


- **堆疊(Stack): 後進先出(Last In First Out, LIFO)**
- **佇列(Queue): 先進先出(First In First Out, FIFO)**



## 整個事件循環大概可以分為幾個步驟：

1. 所有任務都會在主線程上執行，形成一個執行堆疊
2. 如果遇到異步任務，例如：setTimeout，執行環境會調用相關的 API (例如在瀏覽器上會調用 Web API)，等待此異步任務的結果之後，再被放置到任務佇列中
3. 異步任務又分成宏任務 (Macro Task) 和微任務 (Micro Task)，這兩者的執行順序是不同的。如果不分清楚這兩種類別的任務，很可能程式執行出的順序會跟預期的不同。
4. 一旦執行堆疊的所有同步任務完成之後，就會讀取任務佇列，並將任務佇列第一個，加到執行堆疊中運行
5. 只要執行堆疊空了之後，就會讀取任務佇列，不斷重複這個步驟，直到所有任務完成，這個流程就是 **事件循環 (Event loop)**

## 常見的宏任務與微任務如下：

- 宏任務：<code><font color=darkcyan>script</font></code>(整體程式碼)、<code><font color=darkcyan>setTimeout</font></code>、<code><font color=darkcyan>setInterval</font></code>、I/O、事件、<code><font color=darkcyan>postMessage</font></code>、<code><font color=darkcyan> MessageChannel</font></code>、<code><font color=darkcyan>setImmediate</font></code> (Node.js)
- 微任務：<code><font color=darkcyan>Promise.then</font></code>、 <code><font color=darkcyan>MutaionObserver</font></code>、<code><font color=darkcyan>process.nextTick</font></code> (Node.js)。

### 範例:
```js
console.log(1);
Promise.resolve().then(() => {
  console.log(2);
});
setTimeout(() => {
  console.log(3);
}, 0);
console.log(4);
```

```
答案為: 1 -> 4 -> 2 -> 3
```
