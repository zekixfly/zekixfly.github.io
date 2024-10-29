---
title: "while與do-while的差別"
date: 2021-04-09 16:21:00 +7
tags: [VanillaJS]
#spell-checker: disable
---

```js
var i = 5;

//while是先判斷是否符合條件之後再執行裡面的語法

while (i > 5) {
  console.log(`while條件句裡的i變數目前是:${i}`);
  i--;
}
```

```js
i = 5;

//do-while則是先無條件執行一次裡面的語法之後，在來判斷是否符合條件，假如符合再繼續執行裡面的語法

do {
  console.log(`do-while條件句裡的i變數目前是:${i}`);
  i--;
} while (i > 5);
```

`//因此在以上這兩個判斷式條件 i 大於 5 的情況下，因為 do-while 會先無條件執行裡面的語法後，再做判斷，所以這裡只有 do-while 裡面的語法會被執行。`

`//result: do-while 條件句裡的 i 變數目前是:5`
