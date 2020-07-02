import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  return <h1>{props.result}</h1>;
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
