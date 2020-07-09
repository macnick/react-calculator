import operate from './operate';

const calculate = (data, btnName) => {
  let { total, next, operation } = data;

  const operations = {
    AC: () => {
      total = null;
      next = null;
      operation = null;
    },
    '+/-': () => {
      total *= -1;
      next *= -1;
    },
    '÷': () => operate(total, next, operation),
    '%': () => operate(total, next, operation),
    '-': () => operate(total, next, operation),
    'x': () => operate(total, next, operation),
    '=': () => {
      if (total && next) {
        operate(total, next, operation);
        next = null;
        operation = null;
      }
    },
  };

  if (operations[btnName] == undefined) {
    total = total == null || total == 0 ? btnName : total += btnName
  }

  return { total, next, operation };
};

export default calculate;
