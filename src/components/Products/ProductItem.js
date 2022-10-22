import styles from './ProductItem.module.css';

const ProductItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const offer = `$${props.offer.toFixed(2)}`;
    const button = <button onClick={props.onShow} />

    return (
        <li>
            <div className={styles.box}>
                <img src={props.image} alt='' />
                <h3>{props.name}</h3>
                <div className={styles.rates}>
                    <img src={props.rate1} alt='' />
                    <img src={props.rate2} alt='' />
                    <img src={props.rate3} alt='' />
                    <img src={props.rate4} alt='' />
                    <img src={props.rate5} alt='' />
                </div>
                <div className={styles.price}>
                    <span>{price}</span>{offer}</div>
                <div className={styles.icons}>
                    {button}{button}
                    {button}{button}
                </div>
            </div>
        </li>
    );
};

export default ProductItem;