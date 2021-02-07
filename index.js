"use strict";
// true or false
var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = "hello";
var double = "hello";
var back = "hello";
var person = {
    name: {
        first: "Jack",
        last: "goer",
    },
    age: 21,
};
var fruits = ["Apple", "Banana", "Grape"];
fruits.push("MELON");
var fruit = fruits[0];
// tupleは[]の中に型を入れて定義する
var book = ["business", 1500, false];
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
var coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
console.log(CoffeeSize.SHORT);
var unionType = 10;
var unionTypes = [21, "hello"];
// Literal型特定の値しかもたないconstを使うと自ずとLiteralになる
var apple = "apple";
var clothSize = "large";
var cloth = {
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
var anotherAdd = add;
var doubleNumber = function (num) { return num * 2; };
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
function error(message) {
    throw new Error(message);
}
console.log(error("This is error"));
