import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide, clickHandler }) => {

  const handleClick = btnName => clickHandler(name);

  return (
    <div
      className="button"
      style={{ backgroundColor: color, width: wide ? '50.2%' : '25%' }}
      onClick={() => handleClick(name)}
    >
      {name}
    </div>
  )
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: '#f94',
  wide: false,
};

export default Button;
