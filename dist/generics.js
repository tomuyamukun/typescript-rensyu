"use strict";
// Tはname: stringの成約がある
function copy(value, key) {
    value[key];
    return value;
}
console.log(copy({ name: "hello", age: 38 }, "age"));
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add("Apple");
stringLightDatabase.add("Banana");
stringLightDatabase.add("grape");
stringLightDatabase.remove("Banana");
console.log(stringLightDatabase.get());
const TmpDatabase = {
    id: 3,
    data: [32],
};
const fetchData = new Promise((resolve) => {
    setTimeout(() => {
        resolve("hello");
    }, 3000);
});
fetchData.then((data) => {
    data.toUpperCase();
});
const vegetables = ["Tomato", "Broccoli", "Asparagus"];
let tmp;
// type MappedTypes = {
// 	[P in "tomato" | "pumpkin"]: string;
// };
let tmp3;
let tmp4;
let tmp5;
