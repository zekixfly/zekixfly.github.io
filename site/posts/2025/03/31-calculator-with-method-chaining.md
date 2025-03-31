---
title: "Calculator with Method Chaining"
date: 2025-03-31 17:09:00 +8
tags: [VanillaJS]
#spell-checker: disable
---

> LeetCode題目: [2726. Calculator with Method Chaining](https://leetcode.com/problems/calculator-with-method-chaining/description/?envType=study-plan-v2&envId=30-days-of-javascript)

**My solution:**
```js
class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.digit = Number(value);
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.digit += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.digit -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.digit *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        (value == 0) 
            ? this.digit = 'Division by zero is not allowed'
            : this.digit /= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.digit = Math.pow(this.digit, value);
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.digit;
    }
}
```
