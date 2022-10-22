import styles from './ServiceType.module.css';

const ServiceType = (props) => {
    return (
        <li>
            <div className={styles.box}>
                <img src={props.image} alt='' />
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </li>
    );
};

export default ServiceType;