// ES6

// // VARIABLE
// // CONST
// //define variable
// const name = 'Fika Ridaul Maulayya';
// //try to change
// name = 'SantriKoding'; // error
// // LET
// var name = 'Fika Ridaul Maulayya';
// if(true) {
// 	let name = 'Ahmad';
// 	console.log(name); //<-- output "Ahmad"
// }
// console.log(name); // <-- output "Fika Ridaul Maulayya"

// // DEFAULT PARAMETER
// function hello(message = 'Hello World!') {
// 	console.log(message);
// }
// //panggil function tanpa parameter
// console.log(hello()); // <-- output "Hello World!"
// //panggil function dengan parameter
// console.log(hello('Belajar ES6')); //<-- output "Belajar ES6"

// // TEMPLATE STRING
// let nama = 'Fika Ridaul Maulayya';
// let gender = 'Laki-laki';
// let statuso = 'ngondek';
// // name dan status
// console.log(nama + ' memiliki jenis kelamin : ' + gender);
// console.log(`${nama} memiliki jenis kelamin : ${gender} ${statuso}`);

// // ARROW FUNCTION
// // define normal function
// const hello = function (name) {
// 	return `Hello ${name}`;
// }
// // define ES6 function with 1 parameter
// const hello = name => `Hello ${name}`;
// console.log(hello('Fika Ridaul Maulayya')) //< -- output "Hello Fika Ridaul Maulayya"
// define ES6 function with multi parameter
// const hello = (name, umur, gender = 'Non-binary') => `Hello my name is ${name} i am ${gender} ${umur} years old`;
// console.log(hello('Fika Ridaul Maulayya', 25)) //< -- output "Hello Fika Ridaul Maulayya umur 25"
// // define ES6 function with return object
// const hello = (name, umur) => ({
// 	status: 'OK',
// 	message: `Hello ${name} umur ${umur}`
// });
// console.log(hello('Fika Ridaul Maulayya', 25)) // OBJECT
// console.log(hello('Fika Ridaul Maulayya', 25).message) // Message form OBJECT
// //define ES6 function long function
// const hello = name => {
// 	if(!name) {
// 		console.log('Name is required');
// 	}
// 	return `Hello ${name}`;
// }
// console.log(hello('Fika Ridaul Maulayya'))
// console.log(hello())

// REST PARAMETER
// function sum(...rest) {
// 	let sum = 0;
// 	for (let number of rest) sum += number;
// 	return sum;
// }
// let x = sum(4, 9, 16, 25, 29, 100, 66, 77); // <-- output "326"
// console.log(x);
// WITH INITIATE VALUE
// function sum(initVal, ...rest) {
// 	let sum = 0;
// 	for (let number of rest) sum += number;
// 	return initVal + sum;
// }
// let y = sum(10, 5, 7, 8); // <-- output "15"
// console.log(y);

// // DESTRUCTURING & RESTRUCTURING
// // DESTRUCTURING
// // Destructuring array
// const arr = ['Fika', 'Ahmad', 'Lutfi'];
// //destructuring
// const [name1, name2, name3] = arr;
// //print output
// console.log(name1); // <-- "Fika"
// console.log(name2); // <-- "Ahmad"
// console.log(name3); // <-- "Lutfi"
// Destructuring Object
//object
// const obj = {
// 	name: 'Fika Ridaul Maulayya',
// 	age: 25
// };
// //destructuring
// const {name, age} = obj;
// //print ouput
// console.log(name); // <-- "Fika Ridaul Maulayya"
// console.log(age);  // <-- "25"
// // RESTRUCTURING
// //define variable
// const name = 'Fika Ridaul Maulayya';
// const age = 25;
// //restructuring
// const obj = {name, age};
// //print output
// console.log(obj); // <-- {name: 'Fika Ridaul Maulayya', age: 25}

// SPREAD OPERATOR
// // COPY ARRAY
// //define array 1
// const arr1 = [1, 2, 3, 4, 5];
// //define array 2
// const arr2 = [...arr1];
// //print output
// console.log('array 1', arr1); // <-- [1, 2, 3, 4, 5];
// console.log('array 2', arr2); // <-- [1, 2, 3, 4, 5];
// // MERGE ARRAY
// //define array 1
// const arr1 = [1, 2, 3];
// //define array 2
// const arr2 = [4, 5, 6];
// //define array 3
// const arr3 = [...arr1, ...arr2];
// //print array 3
// console.log(arr3); // <-- [1, 2, 3, 4, 5, 6];

// // ARRAY.MAP
// //define array
// const arr = [1, 2, 3, 4, 5, 6, 7];
// //looping
// const number = arr.map( value => {
//   return value;
// });
// //print output
// console.log(number); // [1, 2, 3, 4, 5, 6, 7]

// // PROMISE
// //define variable
// let done = true;
// //define a promise
// const task = new Promise((resolve, reject) => {
// 	if(done) {
// 		resolve('Task berhasil diselesaikan');
// 	} else {
// 		reject('Task belum diselesaikan');
// 	}
// });
// // // run promise
// // console.log(task); // <-- ouput "Task berhasil diselesaikan"
// // run promise with action
// task
// 	.then(response => console.log(response))
// 	.catch(response => console.log(response))

// // ASYNC AWAIT
// //define a promise with 3 seconds
// const taskPromise = () => {
// 	// return new Promise(resolve => {
// 	// 	setTimeout(() => resolve('Selesai'), 5000)
// 	// })
// 	return new Promise(resolve => resolve('Selesai'))
// }
// //define function "task" with async
// const task = async () => {
// 	const done = await taskPromise();
// 	console.log(done);
// }
// //print
// console.log('Mulai');
// task();
// // console.log(taskPromise());
// console.log('Akhir');

