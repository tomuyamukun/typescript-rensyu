"use strict";
// true or false
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = "hello";
let double = "hello";
let back = `hello`;
const person = {
    name: {
        first: "Jack",
        last: "goer",
    },
    age: 21,
};
const fruits = ["Apple", "Banana", "Grape"];
fruits.push("MELON");
const fruit = fruits[0];
// tupleは[]の中に型を入れて定義する
const book = ["business", 1500, false];
// pushで配列に追加することはできる
book.push(21);
// enumは列挙型、特定のまとまったグループのみを受け入れる
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
console.log(CoffeeSize.SHORT);
let unionType = 10;
let unionTypes = [21, "hello"];
// Literal型特定の値しかもたないconstを使うと自ずとLiteralになる
const apple = "apple";
let clothSize = "large";
const cloth = {
    color: "white",
    size: "medium",
};
// 戻り値の型はパラメーターの後につける
function add(num1, num2) {
    return num1 + num2;
}
// void型
function sayHello() {
    console.log("Hello!");
}
const anotherAdd = add;
const doubleNumber = (num) => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, (doubleNum) => {
    return doubleNum;
});
let unknownInput;
let anyInput;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
function error(message) {
    throw new Error(message);
}
console.log(error("This is error"));
