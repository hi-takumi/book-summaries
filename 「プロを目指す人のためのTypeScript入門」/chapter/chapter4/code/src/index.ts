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

// //関数宣言は巻き上げという特有の挙動を持つ。関数宣言より前にその関数が使えるというもの
// console.log(range(5, 10));
// function range(min: number, max: number): number[] {
//   const result = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return result;
// }

// //4.1.2　返り値がない関数を作る
// //void型
// function helloWorldTimes(n: number): void {
//   for (let i = 0; i < n; i++) {
//     console.log("Hello, world");
//   }
// }
// helloWorldTimes(5);

// //return文のあるvoid 早期リターン
// function helloWorldTimes2(n: number): void {
//   if (n >= 100) {
//     console.log(`${n}回なんて無理です。`);
//     return;
//   }
//   for (let i = 0; i < n; i++) {
//     console.log("Hello, world");
//   }
// }
// helloWorldTimes2(5);
// helloWorldTimes2(150);

// //4.1.3 関数式で関数を作る
// type Human = {
//   height: number;
//   weight: number;
// };
// const calcBMI = function (human: Human): number {
//   return human.weight / human.height ** 2;
// };
// const uhyo: Human = { height: 1.84, weight: 72 };
// console.log(calcBMI(uhyo));

// //関数の引数には分割代入を行うことも可能
// type Human = {
//   height: number;
//   weight: number;
// };
// const calcBMI = function ({ height, weight }: Human): number {
//   return weight / height ** 2;
// };
// const uhyo: Human = { height: 1.84, weight: 72 };
// console.log(calcBMI(uhyo));

// //4.1.4 アロー関数
// type Human = {
//   height: number;
//   weight: number;
// };
// const calcBMI = ({ height, weight }: Human): number => {
//   return weight / height ** 2;
// };
// const uhyo: Human = {
//   height: 1.84,
//   weight: 72,
// };
// console.log(calcBMI(uhyo));

// //4.1.5　アロー関数式の省略形
// //普通の書き方
// const calcBMI = ({ height, weight }: number) => {
//   return weight / height ** 2;
// };

// //省略系
// const calcBMI = ({ height, weight }: Human) => weight / height ** 2;

// type Human = {
//   height: number;
//   weight: number;
// };
// type ReturnObj = {
//   bmi: number;
// };
// const calcBMIObject = (height, weight) => ({
//   bmi: weight / height ** 2,
// });

// //4.1.6 メソッド記法で関数を作る
// const obj = {
//   double(num: number): number {
//     return num * 2;
//   },
//   doble2: (num: number): number => num * 2,
// };
// console.log(obj.double(100));
// console.log(obj.doble2(-50));

// //4.1.7 可変長引数の宣言
// const sum = (...args: number[]): number => {
//   let result = 0;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// };
// console.log(sum(1, 10, 100));
// console.log(sum(123, 456));
// console.log(sum());

// const sum = (base: number, ...args: number[]): number => {
//   let result = base * 1000;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// };
// console.log(sum(1, 10, 100));
// console.log(sum(123, 456));

// //4.1.8 関数呼び出しにおけるスプレッド構文
// const sum = (...args: number[]): number => {
//   let result = 0;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// };
// const nums = [1, 2, 3, 4, 5];
// console.log(sum(...nums));

// //4.1.9 オプショナル引数の宣言
// //デフォルト値を指定しない形
// const toLowerOrUpper = (str: string, upper?: boolean) => {
//   if (upper) {
//     return str.toUpperCase();
//   } else {
//     return str.toLowerCase();
//   }
// };
// console.log(toLowerOrUpper("HELLO"));
// console.log(toLowerOrUpper("Hello", false));
// console.log(toLowerOrUpper("hello", true));

// //デフォルト値を指定する場合
// const toLowerOrUpper = (str: string, upper: boolean = false): string => {
//   if (upper) {
//     return str.toUpperCase();
//   } else {
//     return str.toLowerCase();
//   }
// };
// console.log(toLowerOrUpper("Hello"));
// console.log(toLowerOrUpper("Hello", false));
// console.log(toLowerOrUpper("hello", true));

// //4.1.10 コールバック関数
// //関数の引数として関数を渡すことをさす
// type User = { name: string; age: number };
// const getName = (u: User): string => u.name;
// const users: User[] = [
//   { name: "uhyo", age: 26 },
//   { name: "John Smith", age: 15 },
// ];
// const names = users.map(getName);
// console.log(names);

// //上の例を書き換えると…
// type User = {
//   name: string;
//   age: number;
// };
// const users: User[] = [
//   { name: "uhyo", age: 26 },
//   { name: "John Smith", age: 15 },
// ];
// const names = users.map((u: User): string => u.name);
// console.log(names);

/////////////////////////////////////////////////////////////////////
// //4.2 関数の型
// //4.2.1　関数型の記法
// const xRepeat = (num: number): string => "x".repeat(num);

// //4.2.2 返り値の型注釈は省略可能
// const xRepeat = (num: number) => "x".repeat(num);
// //関数が返り値を返さない場合も型注釈を省略できる
// const g = (num: number) => {
//   for (let i = 0; i < num; i++) {
//     console.log("Hello World");
//   }
// };

//4.2.3 返り値の型注釈は省略すべきか

//4.2.4 引数の型注釈が省略可能な場合
