import React from 'react'
import PropTypes from 'prop-types'
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
        <div className={`btn-group group${j + 1}`} key={group}>
          {group.map((el, i) => (
            <Button
              key={el}
              name={el}
              color={buttonColor(j, i)}
              wide={el === '0'}
              clickHandler={() => clickHandler(el)}
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
