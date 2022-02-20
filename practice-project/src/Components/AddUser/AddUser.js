import styles from './AddUser.module.css';
import AddUserInput from './AddUserInput/AddUserInput';

function AddUser(props) {
  return (
    <div className={styles['user-input']}>
      <AddUserInput handler={props.handler}></AddUserInput>;
    </div>
  );
}

export default AddUser;
