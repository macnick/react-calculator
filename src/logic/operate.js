import Big from 'big.js';

const operate = (number1, number2, operation) => {
  const num1 = Big(number1);
  const num2 = Big(number2);
  let total = 0;
  const operations = {
    '+': () => num1.plus(num2),
    '-': () => num1.minus(num2),
    'x': () => num1.times(num2),
    '÷': () => (num2 === 0 ? 'NaN' : num1.div(num2)),
    '%': () => (!num2 ? num1.time(0.01) : num1.times(num2).times(0.01)),
  };
  // do I need to convert the results to strings inside the object?
  total = operations[operation]();

  return total.toString();
};

export default operate;
