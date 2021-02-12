"use strict";
// class Person {
// 	name: string;
// 	private age: number;
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
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. i am ${this.age} years old`);
        this.explainJob();
    }
}
Person.species = "Homo sapiens";
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am teacher and I teach ${this.subject}`);
    }
    get subject() {
        if (!this._subject) {
            throw new Error("there is no subject");
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error("there is no subject");
        }
        this._subject = value;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. i am ${this.age} years old , study ${this.subject}`);
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher("monster", 40, "japanese");
        return Teacher.instance;
    }
}
// const teacher = new Teacher("ossann", 39, "Math");
// console.log(teacher.subject);
// teacher.subject = "fafa";
// teacher.greeting();
// console.log(Person.species);
// console.log(Person.isAdult(38));
const teacher = Teacher.getInstance();
teacher.greeting();
