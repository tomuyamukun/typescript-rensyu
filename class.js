"use strict";
// class Person {
// 	name: string;
// 	private age: number;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 	constructor(initName: string, initAge: number) {
// 		this.name = initName;
// 		this.age = initAge;
// 	}
// 	incrementAge() {
// 		this.age += 1;
// 	}
// 	greeting(this: Person) {
// 		console.log(`Hello! My name is ${this.name}. i am ${this.age} years old`);
// 	}
// }
// let person2: Person;
// const quill = new Person("Quill", 38);
// quill.greeting();
// quill.incrementAge();
// 初期化省略
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.isAdult = function (age) {
        if (age > 17)
            return true;
        return false;
    };
    Person.prototype.incrementAge = function () {
        this.age += 1;
    };
    Person.prototype.greeting = function () {
        console.log("Hello! My name is " + this.name + ". i am " + this.age + " years old");
        this.explainJob();
    };
    Person.species = "Homo sapiens";
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    Teacher.prototype.explainJob = function () {
        console.log("I am teacher and I teach " + this.subject);
    };
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            if (!this._subject) {
                throw new Error("there is no subject");
            }
            return this._subject;
        },
        set: function (value) {
            if (!value) {
                throw new Error("there is no subject");
            }
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.prototype.greeting = function () {
        console.log("Hello! My name is " + this.name + ". i am " + this.age + " years old , study " + this.subject);
    };
    return Teacher;
}(Person));
// const teacher = new Teacher("ossann", 39, "Math");
// console.log(teacher.subject);
// teacher.subject = "fafa";
// teacher.greeting();
// console.log(Person.species);
// console.log(Person.isAdult(38));
var teacher = new Teacher("monster", 40, "japanese");
teacher.greeting();
