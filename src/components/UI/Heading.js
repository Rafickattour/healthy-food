import styles from './Heading.module.css';

const Heading = (props) => {
    return (
        <h1 className={styles.heading}>{props.title}</h1>
    );
};

export default Heading;