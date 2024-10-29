---
title: "可替代if-else-if及switch的寫法"
date: 2021-04-10 00:05:00 +7
tags: [VanillaJS]
#spell-checker: disable
---

```js
var menu = {
  1: "檸檬雞腿飯",
  2: "香茅雞腿飯",
  3: "照燒豬肉飯",
  4: "番茄蛋包飯",
  5: "海苔蛋包飯",
};

console.log(
  `菜單:\n1.${menu[1]}\n2.${menu[2]}\n3.${menu[3]}\n4.${menu[4]}\n5.${menu[5]}`
);

var choice = parseInt(prompt("請輸入菜單編號!"));

console.log("您輸入的菜單編號為:" + choice);
```

```js
//第一種if-else寫法

if (choice <= 3) {
  console.log(`(if-else)一個${menu[choice]}是 $75元`);
} else if (choice <= 5 && choice > 3) {
  console.log(`(if-else)一個${menu[choice]}是 $50元`);
} else {
  console.log(`(if-else)抱歉!沒有此菜單的編號...`);
}
```

```js
//第二種switch寫法

switch (choice) {
  case 1:
  case 2:
  case 3:
    console.log(`(switch)一個${menu[choice]}是 $75元`);
    break;
  case 4:
  case 5:
    console.log(`(switch)一個${menu[choice]}是 $50元`);
    break;
  default:
    console.log(`(switch)抱歉!沒有此菜單的編號...`);
}
```

```js
//第三種object混合if-else寫法

var orderMoney = {
  1: "$75元",
  2: "$75元",
  3: "$75元",
  4: "$50元",
  5: "$50元",
};

if (choice <= 5) {
  console.log(`(object混合if-else)一個${menu[choice]}是 ${orderMoney[choice]}`);
} else {
  console.log(`(object混合if-else)抱歉!沒有此菜單的編號...`);
}
```

```js
//第四種，更好閱讀的寫法，一開始菜單物件裡面包含物件寫法

var menuPlus = {
  1: { 檸檬雞腿飯: "$75元" },
  2: { 香茅雞腿飯: "$75元" },
  3: { 照燒豬肉飯: "$75元" },
  4: { 番茄蛋包飯: "$50元" },
  5: { 海苔蛋包飯: "$50元" },
};

console.log(
  `(更好閱讀的寫法)菜單:\n1.${Object.keys(menuPlus[1])}\n2.${Object.keys(
    menuPlus[2]
  )}\n3.${Object.keys(menuPlus[3])}\n4.${Object.keys(
    menuPlus[4]
  )}\n5.${Object.keys(menuPlus[5])}`
);

var choice = parseInt(prompt("請輸入菜單編號!"));

console.log("您輸入的菜單編號為:" + choice);

if (choice <= 5) {
  console.log(
    `(更好閱讀的寫法)一個${Object.keys(menuPlus[choice])}是 ${Object.values(
      menuPlus[choice]
    )}`
  );
} else {
  console.log(`(更好閱讀的寫法)抱歉!沒有此菜單的編號...`);
}
```
