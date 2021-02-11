"use strict";
var _a, _b, _c;
// interfaceなら→ interface EngineerBlogger extends Engineer, Blogger {}
var quill = {
    name: "Quill",
    role: "front-end",
    follower: 1000,
};
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x;
}
var upperHello = function (x) {
    return 0;
};
upperHello("hi");
upperHello(32);
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ("follower" in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
var Dog = /** @class */ (function () {
    function Dog() {
        this.kind = "dog";
    }
    Dog.prototype.speak = function () {
        console.log("bow-bow");
    };
    return Dog;
}());
var Bird = /** @class */ (function () {
    function Bird() {
        this.kind = "bird";
    }
    Bird.prototype.speak = function () {
        console.log("tweet-tweet");
    };
    Bird.prototype.fly = function () {
        console.log("flutter");
    };
    return Bird;
}());
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case "bird":
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
// React書くので前者が好ましいかな
var input = document.getElementById("input");
// const input = <HTMLInputElement>document.getElementById("input");
input.value = "initial input value";
var designer = {
    name: "quill",
    role: "design",
};
var downloadedData = {
    id: 1,
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
// downloadedDataが空のときno-userが入る
var userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : "no-user";
var target = "hello";
var source = "hello";
var unionFunc;
unionFunc = function (a) {
    return 34;
};
// レストパラメーター
// タプルとは[number, string, boolean]みたいなもの
// function advancedFn(...args: [number, number, number, number, number, boolean?, ...number[]]){}の形でもおｋ
function advancedFn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
advancedFn(0, 3, 3, 3, 33);
// const アサーション
var milk = "milk";
var drink = milk;
var array = [10, 20];
var peter = {
    name: "Peter",
    age: 38,
};
