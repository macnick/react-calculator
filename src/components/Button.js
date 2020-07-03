import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => {
  return (
    <div
      className="button"
      style={{ backgroundColor: color, width: wide ? '50%' : '25%' }}
    >
      {name}
    </div>
  );
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
