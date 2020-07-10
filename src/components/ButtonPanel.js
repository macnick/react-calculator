import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const grey = '#ccc';
  const orange = '#f80';
  const groups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const handleClick = btnName => clickHandler(btnName)

  return (
    <div className="buttonpanel">
      {groups.map((group, j) => (
        <div className={`btn-group group${j + 1}`} key={group}>
          {group.map((el, i) => (
            <Button
              key={el}
              name={el}
              color={i < group.length - 1 ? grey : orange}
              wide={el === '0'}
              clickHandler={() => handleClick(el)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
