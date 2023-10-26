import { useState } from 'react';

export const Practice3 = () => {
  const [result, setResult] = useState<number>(0); // useState<number>で型指定

  // 引数の()の後に: number等をつけることで返り値の型を指定できる
  // 型を指定しなくても、型推論によりnumber型と推測される
  // ただ、型を指定することで、返す値の型が間違っている場合にエラーが出るようになるので、誤って、toString()等を返してしまうことを防げる
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    let total: number = 0; // 変数にも型を指定して安全に開発を進める。ここではnumber型を指定
    total = getTotalFee(1000); // 1100 number型。仮にgetTotalFee()の返り値がstring型だった場合、エラーが出る
    console.log(total);
    setResult(total);
  };

  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPractice}>練習問題３を実行</button>
      <br />
      <span>{result}</span>
    </div>
  )
}
