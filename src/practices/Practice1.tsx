import { useState } from 'react';

export const Practice1 = () => {
  const [result, setResult] = useState<number>(0); // useState<number>で型指定

  const calcTotalFee = (num: number): number => {
    const total = num * 1.1;
    console.log(total);
    return total;
  };

  const onClickPractice = () => {
    const resultValue = calcTotalFee(1000); // 1100 number型
    // const onClickPractice = () => calcTotalFee('1000'); // numの型がanyの場合は正常に計算される(number型だと推測される)
    setResult(resultValue);
  };

  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPractice}>練習問題１を実行</button>
      <br />
      <span>{result}</span>
    </div>
  )
}
