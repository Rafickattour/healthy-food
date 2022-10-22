import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div className={styles.container}>
                <h1>report a comment</h1>
                <p>Give reasoning for this report</p>
                <textarea cols='30' rows='10' />
                <button onClick={props.onReport}>report</button>
            </div>
        </Modal>
    );
};

export default Cart;