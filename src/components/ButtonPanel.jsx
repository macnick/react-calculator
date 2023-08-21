import PropTypes from 'prop-types'
import React from 'react'
import { Button } from './Button'

export const ButtonPanel = ({ clickHandler }) => {
  const darkGrey = '#555'
  const grey = '#bbb'
  const orange = '#f80'
  const groups = [
    ['mc', 'm+', 'm-', 'mr'],
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ]

  const buttonColor = (row, col) => {
    if (row === 0) return darkGrey
    if (col === 3) return orange
    return grey
  }

  return (
    <div className="buttonpanel">
      {groups.map((group, j) => (
        <div key={group} className={`btn-group group${j + 1}`}>
          {group.map((el, i) => (
            <Button
              key={el}
              clickHandler={() => clickHandler(el)}
              color={buttonColor(j, i)}
              name={el}
              wide={el === '0'}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
}
