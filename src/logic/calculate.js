import operate from './operate';

const calculate = (data, btnName) => {
  let { total, next, operation } = data;

  const doOp = (t, n, o) => {
    if (next === null) {
      operation = btnName;
    } else {
      // alert(o)
      total = operate(t, n, o);
      next = null;
    }
  }

  const operations = {
    'AC': () => {
      total = null;
      next = null;
      operation = null;
    },
    '+/-': () => {
      if (next !== null) {
        next = next.startsWith('-') ? next.slice(1) : '-' + next;
      } else if (total !== null) {
        total = total.startsWith('-') ? total.slice(1) : '-' + total;
      }
    },
    '%': () => doOp(total, next, operation),
    '÷': () => doOp(total, next, operation),
    'x': () => doOp(total, next, operation),
    '+': () => doOp(total, next, operation),
    '-': () => doOp(total, next, operation),
    '=': () => {
      if (total && next) {
        total = operate(total, next, operation);
        next = null;
        operation = '=';
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
    if (operation === '=') {
      total = btnName;
      operation = null;
    } else if (operation === null) {
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
