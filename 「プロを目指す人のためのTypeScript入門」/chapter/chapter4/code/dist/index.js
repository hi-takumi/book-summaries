"use strict";
///////////////////////////////////////////////////////////////
// //4.1関数の作り方
// //4.1.1　関数宣言で関数を作る
// function range(min: number, max: number): number[] {
//   const result = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return result;
// }
// console.log(range(5, 10));
const getName = (u) => u.name;
const users = [
    { name: "uhyo", age: 26 },
    { name: "John Smith", age: 15 },
];
const names = users.map(getName);
console.log(names);
