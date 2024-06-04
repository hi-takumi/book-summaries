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
import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("名前を入力してください:", (name) => {
    const displayName = name || "名無し";
    console.log(`こんにちは、${displayName}さん`);
    rl.close();
});
