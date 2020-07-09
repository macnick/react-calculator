import operate from './operate';

const calculate = (data, btnName) => {
  let { total, next, operation } = data;

  const operations = {
    'AC': () => {
      total = null;
      next = null;
      operation = null;
    },
    '+/-': () => {
      total *= -1;
      next *= -1;
    },
    '%': () => operate(total, next, operation),
    '÷': () => {
      if (next === null) { operation = btnName; } else { operate(total, next, operation) }
    },
    '+': () => {
      if (next === null) { operation = btnName; } else { operate(total, next, operation) }
    },
    '-': () => operate(total, next, operation),
    'x': () => operate(total, next, operation),
    '=': () => {
      if (total && next) {
        total = operate(total, next, operation);
        next = null;
        operation = null;
      }
    },
    '.': () => {
      if (total == null) total = '0.';
      if (operation == null && !total.includes('.')) {
        total += '.';
      } else if (operation && !next.includes('.')) {
        next += '.'
      }
    }
  };

  if (operations[btnName] === undefined) {
    if (operation === null) {
      total = total === null || total === 0 ? btnName : total += btnName
    } else {
      next = next === null || next === 0 ? btnName : next += btnName
    }
  } else {
    operations[btnName]()
  }

  return { total, next, operation };
};

export default calculate;
