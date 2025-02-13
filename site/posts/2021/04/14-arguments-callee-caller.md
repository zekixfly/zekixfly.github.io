---
title: "arguments、callee、caller是什麼?"
date: 2021-04-14 14:07:00 +8
tags: [VanillaJS]
#spell-checker: disable
---

```js
//arugumets是個神奇的語法，就算定義的function括號裡面不設定參數，arguments還是會儲存呼叫自己函式時裡面所帶的參數，是以類似陣列的物件儲存，此語法只能在function內使用。
function child() {
  console.log("(arguments)呼叫child()函式時所傳的參數: %o", arguments);
  console.log(
    "(arguments.callee)arguments參數本身的函式: %O",
    arguments.callee
  );
  console.log(
    "(arguments.callee.caller)呼叫arguments本身函式child()的函式: %O",
    arguments.callee.caller
  );
  console.log("(child.caller同上)呼叫child()的函式: %O", child.caller);
  var childSay = `小孩說: 媽~好的，我會乖乖去${[...arguments].join("、")}。`;
  console.log(childSay);
}

function mother() {
  var motherSay = `媽媽說: 孩子，媽媽希望你能健康快樂，所以要健康快樂的活著就要定時地: ${[
    ...arguments,
  ].join("、")}。`;
  console.log(motherSay);
  child(...arguments);
}

mother("吃飯", "洗澡", "睡覺");

/*result:
媽媽說: 孩子，媽媽希望你能健康快樂，所以要健康快樂的活著就要定時地: 吃飯、洗澡、睡覺。
(arguments)呼叫child()函式時所傳的參數: Arguments(3) ["吃飯", "洗澡", "睡覺", callee: ƒ, Symbol(Symbol.iterator): ƒ]
(arguments.callee)arguments參數本身的函式: ƒ child()
(arguments.callee.caller)呼叫arguments本身函式child()的函式: ƒ mother()
(child.caller同上)呼叫child()的函式: ƒ mother()
小孩說: 媽~好的，我會乖乖去吃飯、洗澡、睡覺。 */
```

---

`PS. console.log 裡變數要以何種方式呈現，可使用字串替換符。`

- `%s` => `字串(String)`
- `%d 或 %i` => `整數(Integer)`
- `%f` => `浮點數(Floating points)`
- `%o` => `物件(Object)`
- `%O` => `JSON`
- `%C` => `CSS`
