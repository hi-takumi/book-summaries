import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
//オブジェクトの基本とオブジェクトの型
//objectはいくつかの値をまとめたデータ
const obj = {
    foo: 123,
    bar: "hello,world",
};
console.log(obj.foo);
console.log(obj.bar);
//3.1.2オブジェクトリテラル（１）
//プロパティの:の右には式を書くことができる。
//変数の値を用いたり、プロパティの値を直接計算したりすることができる
// const user = {
//     name:input?input:"名無し",
//     age=20,
// }
//省略記法
const inputName = 123;
const userName = inputName ? inputName : "名無し";
const user = {
    userName,
    age: 10,
};
//3.1.3　オブジェクトリテラル（２）
//オブジェクトリテラルについてコロンの左側のプロパティ名として使えるのは識別子だけじゃない
//文字列リテラル、数値リテラルを使える
const obj2 = {
    foo: 123,
    "foo bar": -500,
    "←": "",
};
console.log(obj2.foo);
console.log(obj2["foo bar"]);
const obj3 = {
    1: "one",
    2.05: "two point o five",
};
console.log(obj3["1"]);
console.log(obj3["2.05"]);
//計算されたプロパティ名
//コロンの左側に[式]という構文を書く
const propName = "foo";
const obj4 = {
    [propName]: 123,
};
console.log(obj4.foo);
//3.1.4　プロパティアクセス　値の代入と取得
const userNm = {
    name: "uhyo",
    age: 25,
};
(user.age = 26), console.log(user.age);
//プロパティアクセス構文にはもう一つある
// //式１[式２]　式１はオブジェクト　式２はプロパティ
// const messages = {
//   good: "0以上の数値が入力されました",
//   bad: "負の数値を入力しないでください",
// };
// rl.question("数値を入力してください", (line) => {
//   const num = Number(line);
//   console.log(messages[num >= 0 ? "good" : "bad"]);
//   rl.close();
// });
//オブジェクトリテラル（３）　スプレッド構文
const obj5 = {
    bar: 456,
    baz: 789,
};
const obj6 = {
    foo: 123,
    ...obj5,
};
console.log(obj6);
//スプレッド構文と通常のプロパティ宣言が同じプロパティを与える場合、後に書かれているほうが採用される
const obj7 = {
    foo: 123,
    bar: 456,
    baz: 789,
};
const obj8 = {
    ...obj7,
    foo: -9999,
};
console.log(obj8);
//...obj7よりも前にfoo:-9999を置くとおコンパイルエラーになる
// const obj9 = {
//     foo:-9999,
//     ...obj7,
// }
//スプレッド構文は一つのオブジェクトリテラルの中で複数回使うことができる
const obj10 = {
    foo: 123,
    bar: 456,
};
const obj11 = {
    bar: -999,
    baz: -9999,
};
const obj12 = {
    ...obj10,
    ...obj11,
};
console.log(obj12);
//3.1.6 オブジェクトはいつ同じなのか
//オブジェクトをほかの変数に入れるという操作はオブジェクトをコピーしていないので、同じオブジェクトが複数の変数に入る結果となる
// const foo = { num: 1234 };
// const bar = foo;
// console.log(bar.num); //1234と表示される
// bar.num = 0;
// console.log(foo.num); // 0と表示される
//スプレッド構文を使うとオブジェクトがコピーされ、違うオブジェクトを参照するようになる
const foo = {
    num: 1234,
};
const bar = { ...foo };
console.log(bar.num);
bar.num = 0;
console.log(foo.num);
///////////////////////////////////////////////////////////////////////////////////////////////////
//3.2 オブジェクトの型
//3.1.1 オブジェクト型の記法
const obj13 = {
    foo: 123,
    bar: "hello",
};
const obj14 = {
    foo: 123,
    bar: "hello",
};
const obj15 = {
    foo: 0,
    bar: "string",
};
const data = {
    apple: 220,
    coffee: 120,
    bento: 500,
};
data.chicken = 250;
const obj16 = {
    foo: false,
    bar: true,
};
const obj17 = {
    foo: true,
    bar: false,
    baz: 1234,
};
console.log(obj16.baz);
console.log(obj17.baz);
//3.2.7　読み取り専用プロパティの宣言
// type MyObj2 = {
//   readonly foo: number;
// };
// const obj18: MyObj2 = {
//   foo: 123,
// };
// object.foo = 0;
//3.2.8 typeofキーワードで変数の型を得る
const num = 0;
const foo1 = 123;
const obj18 = {
    foo: "h1",
    bar: 1,
    baz: false,
};
const obj19 = obj18;
const obj20 = {
    name: "uhyo",
    age: 26,
    telNumber: "09012345678",
};
const u = obj20;
//3.4.2 型引数を持つ型を使用する
const obj21 = {
    mother: 0,
    father: 100,
    child: "1000",
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//3.5 配列
//3.5.1　配列リテラルで配列を作成する
const arr = [0, 123, -456 * 10];
console.log(arr);
//配列は複数種類の型を同時に入れることができる
const arr2 = [100, "文字列", false];
//スプレッド構文が使用可能
const arr3 = [4, 5, 6];
const arr4 = [1, 2, 3, ...arr3];
console.log(arr4);
//3.5.2 配列の要素にアクセスする
console.log(arr[0]);
console.log(arr[1]);
//代入する
const arr5 = [0, 123, -456 * 10];
console.log(arr5);
arr5[1] = 5400;
console.log(arr5);
//3.5.3 配列型の記法
const arr6 = [1, 110.1];
//Array
const arr7 = [false, true];
const arr8 = [
    { name: "山田さん" },
    { name: "田中さん" },
    { name: "鈴木さん" },
];
//3.5.4　readonly配列型
//読み取り専用配列型
// const arr9: readonly number[] = [1, 10, 100];
// arr9[1]=-500;
//3.5.5 配列の機能を使う
const arr10 = [1, 10, 100];
arr10.push(1000);
console.log(arr10);
//3.5.6 for of によるループ
const arr11 = [1, 10, 100];
for (const elm of arr11) {
    console.log(elm);
}
