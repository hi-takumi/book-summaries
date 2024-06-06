"use strict";
const message = "Hello, world";
console.log(message);
console.log(Boolean(123));
//2.4 演算子
//2.4.1 算術演算子(1) 二項演算子
//※算術演算子にはnumberやbigintなどの数値を渡さなければエラーとなる
const addResult = 1024 + 314 + 500;
console.log(addResult);
const discouted = addResult * 0.7;
console.log(discouted);
const sqrt2 = 2 ** 0.5;
console.log(sqrt2);
console.log(sqrt2 - 1);
console.log(18 / 12);
console.log(18n / 12n);
console.log(18 % 12);
console.log(18n % 12n);
//2.4.2 算術演算子(2) 単項演算子
// 単項演算子（+,-,++,**)←この四種類
const x = 123;
const minusx = -x;
console.log(minusx);
// 単項の+と-は数値以外の値もオペランドとして受け取ることができる。その場合はそれを数値に変換してから計算する。
//下記の例では結果が12300になる。
const str = "123";
console.log(+str * 100);
//++,--はインクリメント、デクリメント演算子
//変数のみに着けることができる
//後ろに着けた場合は「変動前の変数の中身が」、雨に着けた場合は「変動後の変数の中身」が返ってくる。
let foo = 10;
foo++;
console.log(foo);
--foo;
console.log(foo);
//2.4.3 文字列の結合を＋演算子で行う
// import {createInterface} from "readline";
// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("名前を入力して下さい:" ,(name)=>{
//     console.log("こんにちは" + name +"さん");
//     rl.close
// })
//2.4.4 比較演算子と等価演算子
//文字列についても大小比較をすることができる
//下記の例はtrueが表示される（aはoよりコードポイント小さいため）
console.log("apple" < "orange");
//一致判定を行う演算子（==,===)
//===のほうが厳密な一致判定を行ってくれるため推奨される
// import { createInterface } from "readline";
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("パスワードを入力してください：", (password) => {
//   if (password === "hogehoge") {
//     console.log("ようこそ");
//   } else {
//     console.log("誰？");
//   }
//   rl.close();
// });
//2.4.5 論理演算子（１）
//&&「かつ」,||「または」をあらわす。
const t = true, f = false;
//true
console.log(t && t);
//false
console.log(t && f);
//false
console.log(f && f);
//true
console.log(t || t);
//true
console.log(t || f);
//false
console.log(f || f);
//2.4.6 論理演算子(2) 一般形と短絡評価
//真偽値以外にもあらゆるオペランドに対して使うことができる。
// import { createInterface } from "readline";
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("名前を入力してください:", (name) => {
//   const displayName = name || "名無し";
//   console.log(`こんにちは、${displayName}さん`);
//   rl.close();
// });
//条件演算子
//三項演算子とも呼ばれる
// import { createInterface } from "readline";
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("数値を入力してください：", (line) => {
//   const num = Number(line);
//   const message =
//     0 <= num && num < 100
//       ? `${num}は0以上100未満です`
//       : `${num}は0以上100未満ではありません。`;
//   console.log(message);
//   rl.close();
// });
//代入演算子
//constで定義された変数には代入演算子は使えない
// import { createInterface } from "readline";
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("数値を入力してください:", (name) => {
//     if(name===""){
//         name="名無し";
//     }
//     console.log(`こんにちは、${name}さん`);
//     rl.close;
// })
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2.5基本的な制御構文
//2.5.1 条件分岐(1) if文の基本
// if (userName === "") userName = "名無し";
//2.5.3　条件分岐(2) elseを使う
//条件式がtrueなら1を実行し、falseなら文2を実行する
// if (userName !== "") {
//   console.log("ちゃんと名前があってえらい");
// } else {
//   console.log("名前を入力してください");
//   userName = "名無し";
// }
//2.5.4 switch文
// import { createInterface } from "readline";
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("コマンドを入力してください：", (name) => {
//   switch (name) {
//     case "greet":
//       console.log("こんにちは");
//       break;
//     case "cat":
//       console.log("あなたは猫派ですか");
//       console.log("私は犬派です");
//       break;
//     default:
//       console.log(`コマンド「${name}」を認識できませんでした。`);
//   }
//   rl.close();
// });
//2.5.5 while文によるループ
// let sum = 0;
// let i = 1;
// while (true) {
//   if (i > 100) {
//     break;
//   }
//   sum += i;
//   i++;
// }
// let ii = 1;
// while (ii <= 100) {
//   ii++;
//   if (ii % 2 === 1) {
//     continue;
//   }
//   console.log(ii);
// }
//2.5.6 for文によるループ
// let sum = 0;
// for (let i: number = 1; i <= 100; i++) {
//   sum += 1;
// }
// console.log(sum);
/////////////////////////////////////////////////////////////////////////////////////////
//2.6 力試し
for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
        console.log(i);
    }
    else if (i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz");
    }
    else if (i % 3 !== 0 && i % 5 === 0) {
        console.log("Buzz");
    }
    else if (i % 3 === 0 && i % 5 === 0)
        console.log("FizzBuzz");
}
