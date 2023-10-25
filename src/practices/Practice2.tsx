import { useState } from 'react';

export const Practice2 = () => {
  const [result, setResult] = useState<number>(0); // useState<number>で型指定

  // 引数の()の後に: number等をつけることで返り値の型を指定できる
  // 型を指定しなくても、型推論によりnumber型と推測される
  // ただ、型を指定することで、返す値の型が間違っている場合にエラーが出るようになるので、誤って、toString()等を返してしまうことを防げる
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    const resultValue = getTotalFee(1000); // 1100 number型
    console.log(resultValue);
    setResult(resultValue);
  };

  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPractice}>練習問題２を実行</button>
      <br />
      <span>{result}</span>
    </div>
  )
}
