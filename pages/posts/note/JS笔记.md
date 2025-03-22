---
title: Js笔记
date: 2025-03-20
categories: 技术
tags:
  - Js
top: 0
---
## JavaScript 输出
JavaScript 没有任何打印或者输出的函数

### JavaScript输出方式
JavaScript 可以通过不同的方式来输出数据：

使用 window.alert() 弹出警告框。
使用 document.write() 方法将内容写到 HTML 文档中。
使用 innerHTML 写入到 HTML 元素。
使用 console.log() 写入到浏览器的控制台。

## 语法
### 字面量

在编程语言中，一般固定值称为字面量，如 3.14。

**数字(Number)** 可以是整数或者小数，或者是科学计数（e）。

**字符串(String)** 可以使用单引号或者双引号

**表达式字面量词** 用于运算

**数组(Arraty)字面量**定义一个数组：
```
[40,100,1,5,25,10]
```
**对象 (Object) 字面量** 定义一个对象:
···
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
···
**函数(Function) 字面量**定义一个函数:
```
function myFunction(a, b) { return a * b;}
```
### JavaScript 变量
在编程语言中，变量用于储存数据值。
JavaScript 使用关键字**var(全局变量)，let(可修改局部变量)，const(常量)**来定义变量，使用等号来为变量赋值：
···
var x, length
x = 5
length = 6
···

变量是一个名称。字面量是一个值。
### JavaScript 字母大小写
JavaScript对大小写敏感
### 空值定义
```js
const x = null;     //表示一个空值被定义了
const y = undefined //表示根本不存在定义
```

### 输出表示
JavaScript使用console.log()输出

### 显示数据类型
```js
console.log(type username);
```

### string字符串
```js
const username = "John";
const age = 30;

Ex6之后可以使用一种模板字符串
console.log("My name is" + username + "and I am " + age);
console.log("My name is $(username) and I am $(age)");
```

### 字符串的内置方法
```js
const s = "Hello World";

console.log(s.length);                   //计算长度
console.log(s.toUpperCase());            //使字母全部变成大写
console.log(s.toLowerCase());            //使字母全部变成小写
console.log(s.substring(begin,end));     //可以把字符串全部分割开 begin是起始位置的索引，end是终止位置的索引
console.log(s.substring(begin,end)..toUpperCase()); //得到大写版本
console.log(s.split('str'));               //可以把字符串转化为数组，str表示分割字符
```
### 数组
```js
const numbers = new Array(1，2，3，4，5);              //构造函数
const fruits = ["apples","oranges","pears",10,true];  //数组中可以储存不同的变量
//const 关键字声明的数组可以改变其内部，但是不可以改变其全部
fruits.push("mangos");                                //使用push方法可以实现在数组末尾添加一个元素
fruits.unshift("strawberries");                       //在数组头部添加一个元素
fruits.pop();                                         //弹出末尾的元素

console.log(Array.isArray(fruits))                    //判断是不是一个数组

console.log(fruits.indexOf("oranges"))                //获得特定元素的索引
```


## 对象
js的对象是拥有属性和方法的数据，表示为键值对的组合，同一个对象中属性可以是任何类型的
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age:30,
  hobbles:["music","movies","sports"],
  address:{
    street:"50 main st",
    city:"Boston",
    state:'MA',
  }
};

console.log(person);        //可以通过.+属性名的方式来访问任何一个属性

const { firstName, lastName } = person;   //将同名的从对象中抽取出来

console.log();

person.email = "85256952@qq.com"          //通过.+属性名的方式添加属性
```
### 对象数组与json
```js
const todos = [
  {
    id:1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id:2,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id:3,
    text: "Take out trash",
    isCompleted: true,
  },
];
```
json 是一种数据格式，与对象数组非常相似

使用网站freematter.com可以自动把对象数组转化为json
如何把json转变为对象数组？
```
const todoJson = JSON.stringify(todos)
```