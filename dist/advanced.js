"use strict";
var _a, _b, _c;
// interfaceなら→ interface EngineerBlogger extends Engineer, Blogger {}
const quill = {
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
const upperHello = function (x) {
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
class Dog {
    constructor() {
        this.kind = "dog";
    }
    speak() {
        console.log("bow-bow");
    }
}
class Bird {
    constructor() {
        this.kind = "bird";
    }
    speak() {
        console.log("tweet-tweet");
    }
    fly() {
        console.log("flutter");
    }
}
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
const input = document.getElementById("input");
// const input = <HTMLInputElement>document.getElementById("input");
input.value = "initial input value";
const designer = {
    name: "quill",
    role: "design",
};
const downloadedData = {
    id: 1,
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
// downloadedDataが空のときno-userが入る
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : "no-user";
let target = "hello";
let source = "hello";
let unionFunc;
unionFunc = function (a) {
    return 34;
};
// レストパラメーター
// タプルとは[number, string, boolean]みたいなもの
// function advancedFn(...args: [number, number, number, number, number, boolean?, ...number[]]){}の形でもおｋ
function advancedFn(...args) { }
advancedFn(0, 3, 3, 3, 33);
// const アサーション
let milk = "milk";
let drink = milk;
const array = [10, 20];
const peter = {
    name: "Peter",
    age: 38,
};
