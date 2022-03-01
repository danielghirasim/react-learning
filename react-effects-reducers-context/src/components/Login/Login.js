import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';
import AuthContext from '../../context/auth-context';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from './Input';

function emailReducer(state, action) {
  if (action.type === 'USER_INPUT') {
    return { value: action.payload, isValid: action.payload.includes('@') };
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
}

function passwordReducer(state, action) {
  if (action.type === 'PASSWORD_INPUT') {
    return { value: action.payload, isValid: action.payload.trim().length > 6 };
  }
  if (action.type === 'PASSWORD_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
}

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const contextData = useContext(AuthContext);

  // Reducer for managing email state
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });

  useEffect(() => {
    let timer = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [emailState, passwordState]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'PASSWORD_INPUT', payload: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'PASSWORD_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      contextData.onLogin(emailState.value, passwordState.value);
    } else if (!emailState.isValid) {
<<<<<<< HEAD
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
=======
      // Focus Email Input
    } else {
      // Focus Password Input
>>>>>>> c2510e571f8214740567bd40235ba6282bce4300
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
<<<<<<< HEAD
          ref={emailInputRef}
=======
>>>>>>> c2510e571f8214740567bd40235ba6282bce4300
          id={'email'}
          inputType={'email'}
          label={'E-Mail'}
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
<<<<<<< HEAD
          ref={passwordInputRef}
=======
>>>>>>> c2510e571f8214740567bd40235ba6282bce4300
          id={'password'}
          inputType={'password'}
          label={'Password'}
          isValid={passwordState.isValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
