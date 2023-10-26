import { useState } from 'react';

export const Practice4 = () => {
  const [result, setResult] = useState<number>(0); // useState<number>で型指定

  const calcTotalFee = (num: number): number => { // strict: trueの場合、引数の型指定がないとエラーが出る。ただし、"noImplicitAny": falseの場合はエラーが出ない
    const total: number = num * 1.1;
    console.log(total);
    return total;
  };

  const onClickPractice = () => {
    const resultValue: number = calcTotalFee(1000); // 1100 number型
    // const onClickPractice = () => calcTotalFee('1000'); // numの型がanyの場合は正常に計算される(number型だと推測される)
    setResult(resultValue);
  };

  return (
    <div>
      <p>練習問題：設定ファイル(tsconfig)を触ってみる</p>
      <button onClick={onClickPractice}>練習問題４を実行</button>
      <br />
      <span>{result}</span>
    </div>
  )
}
