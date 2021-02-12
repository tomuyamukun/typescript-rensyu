"use strict";
// interfaceはobjectのみ使用
const nameable = {
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
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: "quil",
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    },
};
const user = tmpDeveloper;
