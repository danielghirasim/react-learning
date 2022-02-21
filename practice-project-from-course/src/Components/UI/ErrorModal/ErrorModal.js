import React from 'react';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';
import Card from '../Card/Card';
import Button from '../Button/Button';

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

function ModalOverlay(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm} title={props.title} message={props.message} />,
        document.getElementById('modal-root')
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
