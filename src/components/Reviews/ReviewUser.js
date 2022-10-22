import styles from './ReviewUser.module.css';

const ReviewUser = (props) => {
    return (
        <li>
            <div className={styles.box}>
                <div className={styles.info}>
                    <img src={props.image} alt='' />
                    <div className={styles.user}>
                        <h3>{props.name}</h3>
                        <span>{props.job}</span>
                    </div>
                    <div className={styles.menu}>
                        <span onClick={props.onCopy}>copy</span>
                        <span onClick={props.onMake}>report</span>
                    </div>
                </div>
                <p>{props.message}</p>
            </div>
        </li>
    );
};

export default ReviewUser;