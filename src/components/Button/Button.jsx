import React from 'react';
import classes from './Button.module.css';

const Button = ({ onClick, disabled }) => {
  return (
    <button className={classes.button} onClick={onClick} disabled={disabled}>
      Load more
    </button>
  );
};

export default Button;
