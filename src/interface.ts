// interfaceはobjectのみ使用

// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
	(num1: number, num2: number): number;
}
// let addFunc: addFunc;
// addFunc = (n1: number, n2: number) => {
// 	return n1 + n2;
// };

interface Nameable {
	name: string;
	nickName?: string;
}

const nameable: Nameable = {
	name: "Doll",
	nickName: "majin",
};

interface Human extends Nameable {
	age: number;
	// greeting: (message: string) => voidでも可
	greeting?(message: string): void;
}

// const human: Human = {
// 	name: "quill",
// 	age: 38,
// 	greeting(message: string) {
// 		console.log(message);
// 	},
// };

class Developer implements Human {
	constructor(
		public name: string,
		public age: number,
		public experience: number
	) {}
	greeting(message: string) {
		console.log(message);
	}
}

const tmpDeveloper = {
	name: "quil",
	age: 38,
	experience: 3,
	greeting(message: string) {
		console.log(message);
	},
};

const user: Human = tmpDeveloper;
