// true or false
let hasValue: boolean = true;

let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;

let single: string = "hello";
let double: string = "hello";
let back: string = `hello`;

const person: {
	name: {
		first: string;
		last: string;
	};
	age: number;
} = {
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
const book: [string, number, boolean] = ["business", 1500, false];
// pushで配列に追加することはできる
book.push(21);

// enumは列挙型、特定のまとまったグループのみを受け入れる
enum CoffeeSize {
	SHORT = "SHORT",
	TALL = "TALL",
	GRANDE = "GRANDE",
	VENTI = "VENTI",
}

const coffee = {
	hot: true,
	size: CoffeeSize.TALL,
};

console.log(CoffeeSize.SHORT);

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, "hello"];

// Typeエイリアス
type ClothSize = "small" | "medium" | "large";

// Literal型特定の値しかもたないconstを使うと自ずとLiteralになる
const apple: "apple" = "apple";

let clothSize: ClothSize = "large";
const cloth: {
	color: string;
	size: "small" | "medium" | "large";
} = {
	color: "white",
	size: "medium",
};

// 戻り値の型はパラメーターの後につける
function add(num1: number, num2: number): number {
	return num1 + num2;
}

// void型
function sayHello() {
	console.log("Hello!");
}

const anotherAdd: (n1: number, n2: number) => number = add;

const doubleNumber: (num: number) => number = (num) => num * 2;

function doubleAndHandle(num: number, cb: (num: number) => number): void {
	const doubleNum = cb(num * 2);
	console.log(num * 2);
}

doubleAndHandle(21, (doubleNum) => {
	return doubleNum;
});

let unknownInput: unknown;
let anyInput: any;

unknownInput = "hello";
unknownInput = 21;
unknownInput = true;

function error(message: string): never {
	throw new Error(message);
}

console.log(error("This is error"));
