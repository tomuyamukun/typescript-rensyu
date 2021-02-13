// Tはname: stringの成約がある
function copy<T extends { name: string }, U extends keyof T>(
	value: T,
	key: U
): T {
	value[key];
	return value;
}
console.log(copy({ name: "hello", age: 38 }, "age"));

type K = keyof { name: string; age: number };

class LightDatabase<T extends string | number | boolean> {
	private data: T[] = [];
	add(item: T) {
		this.data.push(item);
	}
	remove(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
	}
	get() {
		return this.data;
	}
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add("Apple");
stringLightDatabase.add("Banana");
stringLightDatabase.add("grape");
stringLightDatabase.remove("Banana");
console.log(stringLightDatabase.get());

interface TmpDatabase<T> {
	id: number;
	data: T[];
}

const TmpDatabase: TmpDatabase<number> = {
	id: 3,
	data: [32],
};

interface Todo {
	title: string;
	text: string;
}

// utility型
type TodoAble = Partial<Todo>;
type ReadTodo = Readonly<Todo>;

const fetchData: Promise<string> = new Promise((resolve) => {
	setTimeout(() => {
		resolve("hello");
	}, 3000);
});

fetchData.then((data) => {
	data.toUpperCase();
});

const vegetables: Array<string> = ["Tomato", "Broccoli", "Asparagus"];

interface ResponseData<T = any> {
	data: T;
	status: number;
}

let tmp: ResponseData;

interface Vegetables {
	readonly tomato: string;
	pumpkin: string;
}
// type MappedTypes = {
// 	[P in "tomato" | "pumpkin"]: string;
// };
let tmp3: keyof Vegetables;
type MappedTypes = {
	-readonly [P in keyof Vegetables]-?: string;
};

// conditinaltypes
// tomatoがstringなのでnumber 違ったらboolean型になる
type ConditionalTypes = "tomato" extends string ? number : boolean;

type ConditionalTypesInfer = { tomato: "tomato" } extends { tomato: infer R }
	? R
	: boolean;

type DistributiveConditionalTypes<T> = T extends "tomato" ? number : boolean;
let tmp4: DistributiveConditionalTypes<"tomato" | "pumpkin">;
let tmp5: NonNullable<string | null>;
