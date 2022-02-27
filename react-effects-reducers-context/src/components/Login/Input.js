import React, { useRef } from 'react';
import classes from './Input.module.css';

function Input(props) {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  return (
    <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.inputType}
        id={props.id}
        value={props.inputValue}
        onChange={props.onChange}
        onBlur={props.onBlur}
        
      />
    </div>
  );
}

export default Input;
