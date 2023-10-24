/** TypeScriptの基本の型 */
// const 変数名: 型 = 値;

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A"

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple 複数の型が混在する配列
// 下記の書き方だと、配列の一つ目の要素が数値で、配列の二つ目の要素が文字
let tuple: [number, string] = [0, "A"];

// any
// 何を入れてもエラーにならない
// なるべく使わずに開発することが理想
let any1: any = false;

// void 返り値がないことを表す型
// ただし、TSは暗黙的に型を推測してくれるので、const funcA = () => {} としても、引数なしのvoid型だと推測してくれる
// なので、あえてvoidを書く必要はない
const funcA = (): void => {
  const test = "TEST";
}

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
// あまり使わない
let obj1: object = {};
let obj2: {} = {};
// 下記のような書き方は使う
let obj3: { id: number, name: string } = { id: 0, name: "AAA" };
