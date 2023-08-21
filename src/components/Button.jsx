import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ name, color, wide, clickHandler }) => {
  const handleClick = (title) => {
    clickHandler(title)
  }

  return (
    <button
      className="button"
      type="button"
      style={{
        backgroundColor: color,
        width: wide ? '50%' : '25%',
      }}
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
}

Button.defaultProps = {
  color: '#f94',
  wide: false,
}
