<<<<<<< HEAD
import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
=======
import React, { useRef } from 'react';
import classes from './Input.module.css';

function Input(props) {
>>>>>>> c2510e571f8214740567bd40235ba6282bce4300
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

<<<<<<< HEAD
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

=======
>>>>>>> c2510e571f8214740567bd40235ba6282bce4300
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
<<<<<<< HEAD
      />
    </div>
  );
});
=======
        
      />
    </div>
  );
}
>>>>>>> c2510e571f8214740567bd40235ba6282bce4300

export default Input;
