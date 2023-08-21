import { operate } from './operate'

export const calculate = (data, btnName) => {
  let { total, next, operation, memory } = data

  const doOp = (t, n, o) => {
    if (next === null) {
      operation = btnName
    } else {
      total = operate(t, n, o)
      next = null
    }
  }

  const operations = {
    mc: () => {
      memory = null
    },
    'm+': () => {
      const toMemory = next || total
      if (toMemory !== null) {
        memory = memory === null ? toMemory : operate(memory, toMemory, '+')
        operation = operation !== null ? operation : '='
      }
    },
    mr: () => {
      if (memory !== null) {
        total = memory
      }
    },
    AC: () => {
      total = null
      next = null
      operation = null
    },
    '+/-': () => {
      if (next !== null) {
        next = next.startsWith('-') ? next.slice(1) : `-${next}`
      } else if (total !== null) {
        total = total.startsWith('-') ? total.slice(1) : `-${total}`
      }
    },
    '%': () => doOp(total, next, operation),
    '÷': () => doOp(total, next, operation),
    x: () => doOp(total, next, operation),
    '+': () => doOp(total, next, operation),
    '-': () => doOp(total, next, operation),
    '=': () => {
      if (total && next) {
        total = operate(total, next, operation)
        next = null
        operation = '='
      }
    },
    '.': () => {
      if (total == null) total = '0.'
      if (operation == null && !total.includes('.')) {
        total += '.'
      } else if (operation && !next.includes('.')) {
        next += '.'
      }
    },
  }

  if (operations[btnName] === undefined) {
    if (operation === '=') {
      total = btnName
      operation = null
    } else if (operation === null) {
      // eslint-disable-next-line
      total = total === null || total == 0 ? btnName : (total += btnName)
    } else {
      // eslint-disable-next-line
      next = next === null || next == 0 ? btnName : (next += btnName)
    }
  } else {
    operations[btnName]()
  }

  return { total, next, operation, memory }
}
