type Engineer = {
	name: string;
	role: string;
};

type Blogger = {
	name: string;
	follower: number;
};

type EngineerBlogger = Engineer & Blogger;
// interfaceなら→ interface EngineerBlogger extends Engineer, Blogger {}

const quill: EngineerBlogger = {
	name: "Quill",
	role: "front-end",
	follower: 1000,
};

// ↑はinterfaceでも問題無い

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

// 関数のオーバーロード
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number) {
	if (typeof x === "string") {
		return x.toUpperCase();
	}
	return x;
}
interface TemFunc {
	(x: string): number;
	(x: number): number;
}

const upperHello: TemFunc = function (x: string | number) {
	return 0;
};
upperHello("hi");
upperHello(32);

// interface FuncA {
// 	(a: number, b: string): number;
// 	(a: string, b: number): number;
// }

// interface FuncB {
// 	(a: string): number;
// }

// let intersectionFunc: FuncA & FuncB;
// intersectionFunc = function (a: number | string, b?: number | string) {
// 	return 0;
// };

type NomadWorker = Engineer | Blogger;

function describeProfile(nomadWorker: NomadWorker) {
	console.log(nomadWorker.name);
	if ("role" in nomadWorker) {
		console.log(nomadWorker.role);
	}
	if ("follower" in nomadWorker) {
		console.log(nomadWorker.follower);
	}
}

class Dog {
	kind: "dog" = "dog";
	speak() {
		console.log("bow-bow");
	}
}

class Bird {
	kind: "bird" = "bird";
	speak() {
		console.log("tweet-tweet");
	}
	fly() {
		console.log("flutter");
	}
}

type Pet = Dog | Bird;

function havePet(pet: Pet) {
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
const input = document.getElementById("input") as HTMLInputElement;
// const input = <HTMLInputElement>document.getElementById("input");

input.value = "initial input value";

// []追加されるものは全部string、nameもstringにしないとエラーが出る
interface Designer {
	name: string;
	[index: string]: string;
}
const designer: Designer = {
	name: "quill",
	role: "design",
};

interface DownloadedData {
	id: number;
	user?: {
		name?: {
			first: string;
			last: string;
		};
	};
}
const downloadedData: DownloadedData = {
	id: 1,
};

console.log(downloadedData.user?.name?.first);

// downloadedDataが空のときno-userが入る
const userData = downloadedData.user ?? "no-user";

type id = DownloadedData["user" | "id"];

let target = "hello";
let source: "hello" = "hello";

// 関数型のunion型
interface FuncA {
	(a: number): number;
}

interface FuncB {
	(a: string): string;
}

let unionFunc: FuncA | FuncB;

unionFunc = function (a: number) {
	return 34;
};

// レストパラメーター
// タプルとは[number, string, boolean]みたいなもの
// function advancedFn(...args: [number, number, number, number, number, boolean?, ...number[]]){}の形でもおｋ
function advancedFn(...args: number[]) {}
advancedFn(0, 3, 3, 3, 33);

// const アサーション
let milk = "milk" as const;
let drink = milk;

const array = [10, 20] as const;
const peter = {
	name: "Peter",
	age: 38,
} as const;

// typeof
type PeterType = typeof peter;
