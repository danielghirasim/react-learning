import styles from './AddUserItem.module.css';
import Card from '../../UI/Card/Card';

function AddUserItem(props) {
  function removeItemHandler() {
    props.removeHandler(props.id);
  }

  return (
    <Card>
      <div className={styles.user} onClick={removeItemHandler}>
        <p className={styles['user__name']}>{props.data.name} -</p>
        <p className={styles['user__age']}>{props.data.age} years old.</p>
      </div>
    </Card>
  );
}

export default AddUserItem;
