"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logging(message) {
    return function Logging(constructor) {
        console.log(message);
        console.log(constructor);
    };
}
function Component(template, selector) {
    return function (constructor) {
        return class extends constructor {
            constructor(...args) {
                super(...args);
                const mountedElement = document.querySelector(selector);
                const instance = new constructor();
                if (mountedElement) {
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector("h1").textContent = instance.name;
                }
            }
        };
    };
}
function MethodLogging(target, propertyKey, descriptor) {
    console.log("MethodLogging");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
function PropertyLogging(target, propertyKey) {
    console.log("propertyLogging");
    console.log(target);
    console.log(propertyKey);
}
function enumerable(isEnumerable) {
    return function (target, propertyKey, descriptor) {
        return {
            enumerable: isEnumerable,
        };
    };
}
function AccessorLogging(target, propertyKey, descriptor) {
    console.log("AccessorLogging");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
function ParameterLogging(target, propertyKey, ParameterIndex) {
    console.log("ParameterLogging");
    console.log(target);
    console.log(propertyKey);
    console.log(ParameterIndex);
}
// デコレーターはクラスの定義時に発生している
// デコレーターは下から上に実行される
let User = class User {
    constructor(_age) {
        this._age = _age;
        this.name = "Quill";
        console.log("User was created");
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    greeting(message) {
        console.log("hello");
    }
};
User.name2 = "Quill";
__decorate([
    AccessorLogging
], User.prototype, "age", null);
__decorate([
    enumerable(false),
    MethodLogging,
    __param(0, ParameterLogging)
], User.prototype, "greeting", null);
__decorate([
    PropertyLogging
], User, "name2", void 0);
User = __decorate([
    Component("<h1>{{ name }}</h1>", "#app"),
    Logging("Logging User")
], User);
const user1 = new User(32);
