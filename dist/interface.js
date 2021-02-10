"use strict";
// interfaceはobjectのみ使用
var nameable = {
    name: "Doll",
    nickName: "majin",
};
// const human: Human = {
// 	name: "quill",
// 	age: 38,
// 	greeting(message: string) {
// 		console.log(message);
// 	},
// };
var Developer = /** @class */ (function () {
    function Developer(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    Developer.prototype.greeting = function (message) {
        console.log(message);
    };
    return Developer;
}());
var tmpDeveloper = {
    name: "quil",
    age: 38,
    experience: 3,
    greeting: function (message) {
        console.log(message);
    },
};
var user = tmpDeveloper;
