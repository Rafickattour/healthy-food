import { useState, useEffect } from 'react';

import styles from './AlertBox.module.css';

const AlertBox = () => {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {showAlert && <div className={styles.alertbox}
                onClick={() => setShowAlert(false)}>
                <div className={styles.alert}>
                    This website is only for entertainment and
                    design purposes,Doesn't contain any exchange
                    of data and was built with reactJs
                </div>
            </div>}
        </div>
    );
};

export default AlertBox;