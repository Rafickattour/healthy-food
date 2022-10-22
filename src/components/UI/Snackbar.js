import styles from './Snackbar.module.css';

const Snackbar = (props) => {
    return <div id={styles.snackbar}>{props.content}</div>
};

export default Snackbar;