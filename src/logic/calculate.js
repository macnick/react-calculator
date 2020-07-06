import operate from './operate';

const calculate = (data, btnName) => {
  let { total, next, operation } = data;
  const operations = {
    '+/-': () => { total *= -1; next *= -1 },
    '-': () => next *= -1,
    '*': () => total * next
  }
  operations[btnName]();
  return { total, next, operation }
}

export default calculate;