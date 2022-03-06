import React from 'react';
import classes from './Modal.module.css';
import reactDom from 'react-dom';
import Card from './Card';

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onHide}></div>;
}

function ModalContent(props) {
  return <Card className={classes.modal}>{props.children}</Card>;
}

function Modal(props) {
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <Backdrop onHide={props.onHide}>{props.children}</Backdrop>,
        document.getElementById('overlays')
      )}
      {reactDom.createPortal(<ModalContent>{props.children}</ModalContent>, document.getElementById('overlays'))}
    </React.Fragment>
  );
}

export default Modal;
