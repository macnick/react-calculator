import React from 'react';
import PropTypes from 'prop-types';

function Button({ name }) {
  return <div className="button">{name}</div>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
