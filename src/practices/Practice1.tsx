export const Practice1 = () => {
  const calcTotalFee = (num: number): void => {
    const total = num * 1.1;
    console.log(total);
  }

  const onClickPractice = () => calcTotalFee(1000); // 1100 number型
  // const onClickPractice = () => calcTotalFee('1000'); // numの型がanyの場合は正常に計算される(number型だと推測される)
  return (
    <div>
      <p>練習問題：引数の型指定</p>
      <button onClick={onClickPractice}>練習問題１を実行</button>
    </div>
  )
}
