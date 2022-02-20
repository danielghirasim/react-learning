import styles from './AddUserList.module.css';
import AddUserItem from '../AddUserItem/AddUserItem';
import Card from '../../UI/Card/Card';

function AddUserList(props) {
  if (props.data.length > 0) {
    return (
      <Card>
        <div className={styles.users}>
          {props.data.map((user) => (
            <AddUserItem data={user} key={user.id} id={user.id} removeHandler={props.removeHandler} />
          ))}
        </div>
      </Card>
    );
  }

  if (props.data.length === 0) {
    return (
      <Card>
        <p className={styles['users--no-users']}>Please enter a user.</p>
      </Card>
    );
  }
}

export default AddUserList;
