import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button className={`${styles.btn} ${props.class}`}
            onClick={props.onClick}>
            <span>{props.name}</span>
            <div className={styles.liquid} />
        </button>
    );
};

export default Button;