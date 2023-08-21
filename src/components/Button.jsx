import PropTypes from 'prop-types'
import React from 'react'

export const Button = ({ name, color, wide, clickHandler }) => {
  const handleClick = (title) => {
    clickHandler(title)
  }

  return (
    <button
      className="button"
      onClick={() => handleClick(name)}
      style={{
        backgroundColor: color,
        width: wide ? '50%' : '25%',
      }}
      type="button"
    >
      {name}
    </button>
  )
}

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
}

Button.defaultProps = {
  color: '#f94',
  wide: false,
}
