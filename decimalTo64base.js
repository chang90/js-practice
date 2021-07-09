function decimalTo64base(inputNum) {
  const chars = 'ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789+/'.split('');
  const radix = chars.length;
  let qutient = +inputNum;
  const arr = [];
  if(inputNum > 0 && inputNum % 1 != 0) {
    const numberArr = ('' + inputNum).split('.').map((numberString)=>Number(numberString));
    console.log(numberArr)
    return decimalTo64base(numberArr[0]) + '.' + decimalTo64base(numberArr[1]);
  } else {
      do {
        const mod = qutient % radix;
        qutient = (qutient - mod) / radix;
        arr.unshift(chars[mod]);
      } while (qutient);
      return arr.join('');
    }
}

console.log(decimalTo64base(11.5))
