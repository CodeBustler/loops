// JS Loops

// for Loop

// 1. Make a Tables using for Loops
let num = 2;

for (let i = 1; i <= 10; i++) {
	console.log(`${num} X ${i} = ${num * i}`);
}

// for-in Loop
let obj = {
	name: "Arjun",
	age: 27,
};

for (let key in obj) {
	console.log(`The ${key} is ${obj[key]}`);
}

// for-of Loops
let ary = [13, 23, 242];

for (let i of ary) {
	console.log(`${i * 2}`);
}

console.log("While Loop #######");
// While Loop
let i = 0;

// while (10 > i) {
// 	console.log("Hello");
// 	i++;
// }

// Do-while Loops
do {
	console.log(i);
	i++;
} while (i < 10);
