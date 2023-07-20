import React, { useState } from 'react'
import { ButtonPanel, Display } from './components'
import { calculate } from './logic'
import './styles/main.css'

export const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  })

  const handleClick = (btnName) => {
    const { total, next, operation } = state
    const calc = calculate({ total, next, operation }, btnName)
    setState((prevState) => ({
      ...prevState,
      total: calc.total,
      next: calc.next,
      operation: calc.operation,
    }))
  }

  const { next, total } = state
  const result = next || total
  return (
    <div className="app">
      <Display result={result} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  )
}
