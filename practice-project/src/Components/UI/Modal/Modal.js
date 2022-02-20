import styles from './Modal.module.css';
import Button from '../Button/Button';
import Card from '../Card/Card';

function Modal(props) {

  return (
    <div className={styles['modal']}>
      <div className={styles['modal__header-box']}>
        <h2 className={styles['modal__header']}>{props.header}</h2>
      </div>
      <div className={styles['modal__text-box']}>
        <p className={styles['modal__description']}>{props.description}</p>
      </div>
      <Button onClick={props.handler}>Okay</Button>
    </div>
  );
}

export default Modal;
