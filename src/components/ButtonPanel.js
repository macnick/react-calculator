import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const grey = '#ccc';
  const groups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div className="buttonpanel">
      {groups.map((group, j) => (
        <div className={`btn-group group${j + 1}`} key={group}>
          {group.map((el, i) => (
            <Button
              key={el}
              name={el}
              color={i < group.length - 1 ? grey : null}
              wide={el === '0'}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
