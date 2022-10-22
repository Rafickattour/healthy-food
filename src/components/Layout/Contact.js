import { useRef } from 'react';

import Heading from '../UI/Heading';
import styles from './Contact.module.css';
import contact from '../../assets/Images/contact-img.jpg';
import Button from '../UI/Button';

const Contact = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const messageRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        nameRef.current.value = null;
        emailRef.current.value = null;
        numberRef.current.value = null;
        messageRef.current.value = null;
    }
    return (
        <section className={styles.contact} id='6'>
            <Heading title='contact us' />
            <div className={styles.row}>
                <div className={styles.image}>
                    <img src={contact} alt='' />
                </div>
                <form action='' onSubmit={submitHandler}>
                    <div className={styles.inputBox}>
                        <h3>full name</h3>
                        <input ref={nameRef} type='text' placeholder='enter your name' />
                    </div>
                    <div className={styles.inputBox}>
                        <h3>email</h3>
                        <input ref={emailRef} type='email' placeholder='enter your email' />
                    </div>
                    <div className={styles.inputBox}>
                        <h3>number</h3>
                        <input ref={numberRef} type='number' max='30' placeholder='enter your number' />
                    </div>
                    <div className={styles.inputBox}>
                        <h3>message</h3>
                        <textarea ref={messageRef} cols='30' rows='10' placeholder='message' />
                    </div>
                    <Button class={styles.btn} name='send' />
                </form>
            </div>
        </section>
    );
};

export default Contact;