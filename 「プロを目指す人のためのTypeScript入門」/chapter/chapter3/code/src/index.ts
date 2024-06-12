// import { BADFAMILY } from "dns";
// import { createInterface } from "readline";

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// //オブジェクトの基本とオブジェクトの型
// //objectはいくつかの値をまとめたデータ
// const obj = {
//   foo: 123,
//   bar: "hello,world",
// };
// console.log(obj.foo);
// console.log(obj.bar);

// //3.1.2オブジェクトリテラル（１）
// //プロパティの:の右には式を書くことができる。
// //変数の値を用いたり、プロパティの値を直接計算したりすることができる
// // const user = {
// //     name:input?input:"名無し",
// //     age=20,
// // }
// //省略記法
// const inputName = 123;
// const userName = inputName ? inputName : "名無し";
// const user = {
//   userName,
//   age: 10,
// };

// //3.1.3　オブジェクトリテラル（２）
// //オブジェクトリテラルについてコロンの左側のプロパティ名として使えるのは識別子だけじゃない
// //文字列リテラル、数値リテラルを使える
// const obj2 = {
//   foo: 123,
//   "foo bar": -500,
//   "←": "",
// };
// console.log(obj2.foo);
// console.log(obj2["foo bar"]);

// const obj3 = {
//   1: "one",
//   2.05: "two point o five",
// };
// console.log(obj3["1"]);
// console.log(obj3["2.05"]);

// //計算されたプロパティ名
// //コロンの左側に[式]という構文を書く
// const propName = "foo";
// const obj4 = {
//   [propName]: 123,
// };
// console.log(obj4.foo);

// //3.1.4　プロパティアクセス　値の代入と取得
// const userNm = {
//   name: "uhyo",
//   age: 25,
// };
// (user.age = 26), console.log(user.age);

// //プロパティアクセス構文にはもう一つある
// // //式１[式２]　式１はオブジェクト　式２はプロパティ
// // const messages = {
// //   good: "0以上の数値が入力されました",
// //   bad: "負の数値を入力しないでください",
// // };

// // rl.question("数値を入力してください", (line) => {
// //   const num = Number(line);
// //   console.log(messages[num >= 0 ? "good" : "bad"]);
// //   rl.close();
// // });

// //オブジェクトリテラル（３）　スプレッド構文
// const obj5 = {
//   bar: 456,
//   baz: 789,
// };

// const obj6 = {
//   foo: 123,
//   ...obj5,
// };
// console.log(obj6);

// //スプレッド構文と通常のプロパティ宣言が同じプロパティを与える場合、後に書かれているほうが採用される
// const obj7 = {
//   foo: 123,
//   bar: 456,
//   baz: 789,
// };

// const obj8 = {
//   ...obj7,
//   foo: -9999,
// };
// console.log(obj8);

// //...obj7よりも前にfoo:-9999を置くとおコンパイルエラーになる
// // const obj9 = {
// //     foo:-9999,
// //     ...obj7,
// // }

// //スプレッド構文は一つのオブジェクトリテラルの中で複数回使うことができる
// const obj10 = {
//   foo: 123,
//   bar: 456,
// };
// const obj11 = {
//   bar: -999,
//   baz: -9999,
// };
// const obj12 = {
//   ...obj10,
//   ...obj11,
// };
// console.log(obj12);

// //3.1.6 オブジェクトはいつ同じなのか
// //オブジェクトをほかの変数に入れるという操作はオブジェクトをコピーしていないので、同じオブジェクトが複数の変数に入る結果となる
// // const foo = { num: 1234 };
// // const bar = foo;
// // console.log(bar.num); //1234と表示される
// // bar.num = 0;
// // console.log(foo.num); // 0と表示される

// //スプレッド構文を使うとオブジェクトがコピーされ、違うオブジェクトを参照するようになる
// // const foo = {
// //   num: 1234,
// // };
// // const bar = { ...foo };
// // console.log(bar.num);
// // bar.num = 0;
// // console.log(foo.num);

// ///////////////////////////////////////////////////////////////////////////////////////////////////
// //3.2 オブジェクトの型
// //3.1.1 オブジェクト型の記法
// const obj13: {
//   foo: number;
//   bar: string;
// } = {
//   foo: 123,
//   bar: "hello",
// };

// //3.2.3type文で方に別名をつける
// //型宣言を後に書いても問題ない
// type FooBarObj = {
//   foo: number;
//   bar: string;
// };
// const obj14: FooBarObj = {
//   foo: 123,
//   bar: "hello",
// };

// //3.2.4interface宣言でオブジェクト型を宣言する
// interface FooBarObj1 {
//   foo: number;
//   bar: string;
// }
// const obj15: FooBarObj1 = {
//   foo: 0,
//   bar: "string",
// };

// //任意のプロパティ名を許容する方（インデックスシグネチャ）
// //[キー名: string]:型 任意の名前のプロパティが型を持つという意味になる
// type PriceData = {
//   [key: string]: number;
// };
// const data: PriceData = {
//   apple: 220,
//   coffee: 120,
//   bento: 500,
// };
// data.chicken = 250;
// // data.弁当="foo";　これはコンパイルエラーになる

// //3.2.6 オプショナルなプロパティの宣言
// //オプショナルなプロパティとはあってもなくてもよいプロパティのこと
// type MyObj = {
//   foo: boolean;
//   bar: boolean;
//   baz?: number;
// };
// const obj16: MyObj = {
//   foo: false,
//   bar: true,
// };
// const obj17: MyObj = {
//   foo: true,
//   bar: false,
//   baz: 1234,
// };
// console.log(obj16.baz);
// console.log(obj17.baz);

// //3.2.7　読み取り専用プロパティの宣言
// // type MyObj2 = {
// //   readonly foo: number;
// // };
// // const obj18: MyObj2 = {
// //   foo: 123,
// // };
// // object.foo = 0;

// //3.2.8 typeofキーワードで変数の型を得る
// // const num: number = 0;
// // type T = typeof num;
// // const foo1: T = 123;

// //3.3 部分型関係
// //3.3.1 部分型とは
// type FooBar = {
//   foo: string;
//   bar: number;
// };
// type FooBarBaz = {
//   foo: string;
//   bar: number;
//   baz: boolean;
// };
// const obj18: FooBarBaz = {
//   foo: "h1",
//   bar: 1,
//   baz: false,
// };
// const obj19: FooBar = obj18;

// //3.3.2　プロパティの包含関係による部分型関係の発生
// //HumanはAnimalの部分型という表現になる
// type Animal = {
//   age: number;
// };
// type Human = {
//   age: number;
//   name: string;
// };

// type AnimalFamily = {
//   familyName: string;
//   mother: Animal;
//   father: Animal;
//   child: Animal;
// };
// type HumanFamily = {
//   familyName: string;
//   mother: Human;
//   father: Human;
//   child: Human;
// };

// //3.3.3 余剰プロパティに対する型エラーについて
// type User = {
//   name: string;
//   age: number;
// };
// const obj20 = {
//   name: "uhyo",
//   age: 26,
//   telNumber: "09012345678",
// };
// const u: User = obj20;

// ////////////////////////////////////////////////////////////////////////////////
// //3.4 型引数を持つ型
// //3.4.1 型引数を持つ型を宣言する
// //User1<T>型はnameプロパティがstring型でありchildプロパティがT型であるオブジェクトの型
// type User1<T> = {
//   name: string;
//   child: T;
// };
// //複数も可脳
// type Family<Parent, Child> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };

// //3.4.2 型引数を持つ型を使用する
// const obj21: Family<number, string> = {
//   mother: 0,
//   father: 100,
//   child: "1000",
// };

// //3.4.3　部分型関係による型引数の制約
// //下記の例　Familyの２つの型引数Parent、Childはともにextends HasNameという制約を持っている。つまり、Familyを使う際に与える型引数はHasNameの部分型でなければならない
// type HasName = {
//   name: string;
// };
// type Family3<Parent extends HasName, Child extends HasName> = {
//   moter: Parent;
//   father: Parent;
//   child: Child;
// };

// type Animal1 = {
//   name: string;
// };
// type Human1 = {
//   name: string;
//   age: number;
// };
// type T1 = Family<Animal1, Human1>;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// //3.5 配列
// //3.5.1　配列リテラルで配列を作成する
// const arr = [0, 123, -456 * 10];
// console.log(arr);
// //配列は複数種類の型を同時に入れることができる
// const arr2 = [100, "文字列", false];
// //スプレッド構文が使用可能
// const arr3 = [4, 5, 6];
// const arr4 = [1, 2, 3, ...arr3];
// console.log(arr4);

// //3.5.2 配列の要素にアクセスする
// console.log(arr[0]);
// console.log(arr[1]);

// //代入する
// const arr5 = [0, 123, -456 * 10];
// console.log(arr5);
// arr5[1] = 5400;
// console.log(arr5);

// //3.5.3 配列型の記法
// const arr6: number[] = [1, 110.1];

// //Array
// const arr7: boolean[] = [false, true];
// const arr8: Array<{ name: string }> = [
//   { name: "山田さん" },
//   { name: "田中さん" },
//   { name: "鈴木さん" },
// ];

// //3.5.4　readonly配列型
// //読み取り専用配列型
// // const arr9: readonly number[] = [1, 10, 100];
// // arr9[1]=-500;

// //3.5.5 配列の機能を使う
// const arr10 = [1, 10, 100];
// arr10.push(1000);
// console.log(arr10);

// //3.5.6 for of によるループ
// const arr11 = [1, 10, 100];
// for (const elm of arr11) {
//   console.log(elm);
// }

// //3.5.7 タプル型
// let tuple: [string, number] = ["foo", 0];
// tuple = ["aiueo", -555];
// const str = tuple[0];
// const num1 = tuple[1];

// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// //3.6 分割代入
// //3.6.1 オブジェクトの分割代入（１）
// //下記の例　objのfooプロパティを変数fooに、objのbarプロパティを変数barに代入するという意味
// //基本的にはプロパティが同じ名前の時に対応している
// // const { foo, bar } = obj;

// //プロパティ名と別の名前の変数をつかいたいとき
// //プロパティ名：変数名で対応する
// // const { foo, bar: barVar, "foo bar": fooBar } = obj;

// //注意点　分割代入で宣言された変数には型注釈がつけられない

// //3.6.2 オブジェクトの分割代入（２）
// // const nested = {
// //   num: 123,
// //   obj: {
// //     foo: "hello",
// //     bar: "world",
// //   },
// // };
// // const {
// //   num,
// //   obj: { foo },
// // } = nested;
// // console.log(num);
// // console.log(foo);

// //3.6.3 配列の分割代入
// const arr12 = [1, 2, 3, 4, 5, 6, 7, 8];
// const [first, second, third] = arr12;
// console.log(first);
// console.log(second);
// console.log(third);

// const arr13 = [1, 2, 3, 8, 16, 32];
// const [, foo11, , bar11, , baz11] = arr13;
// console.log(foo11);
// console.log(bar11);
// console.log(baz11);

// //3.6.4 分割代入のデフォルト値
// type Obj = { foo?: number };
// const obj1: Obj = {};
// const obj2: Obj = { foo: -1234 };

// const { foo = 500 } = obj1;
// console.log(foo);
// const { foo: bar = 500 } = obj2;
// console.log(bar);

// type NestedObj = {
//   obj?: {
//     foo: number;
//   };
// };
// const nested1: NestedObj = {
//   obj: { foo: 123 },
// };
// const nested2: NestedObj = {};
// const { obj: { foo: foo1 } = { foo: 500 } } = nested1; //fooには123が代入される
// const { obj: { foo: foo2 } = { foo: 500 } } = nested2; //foo2には500が代入される

// //3.6.5 restパターンでオブジェクトののこりを取得する
// const obj = {
//   foo: 123,
//   bar: "string",
//   baz: false,
// };
// const { foo, ...restObj } = obj;
// console.log(foo);
// console.log(restObj);

//////////////////////////////////////////////////////////////////////////////////////////////////////
// //3.7そのほかの組み込みオブジェクト
// //3.7.1　Dateオブジェクト
// const d = new Date();
// console.log(d);

// //3.7.2　正規表現オブジェクト
// const r = /ab+c/;
// console.log(r.test("abbbbc"));
// console.log(r.test("Hello, abc world"));
// console.log(r.test("ABC"));
// console.log(r.test("こんにちは"));

// //3.7.4 Mapオブジェクト/Setオブジェクト
// const map: Map<string, number> = new Map();
// map.set("foo", 1234);
// console.log(map.get("foo"));
// console.log(map.get("bar"));

///////////////////////////////////////////////////////////////////////////////////////////////////
type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};
const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;



for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(
      `${user.name}(${user.age})はプレミアムユーザーではありません。`
    );
  }
}
