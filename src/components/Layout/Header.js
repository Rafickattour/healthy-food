import { useState, useEffect } from 'react';

import styles from './Header.module.css';
import logo from '../../assets/Images/logo.png';

const Header = () => {
    const [isMenu, setIsMenu] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const menuDrop = () => {
        setIsMenu((currentMenu) => {
            return !currentMenu;
        });
    };

    useEffect(() => {
        const scrollHandler = () => {
            setIsMenu(false);
            setIsScroll(true);

            if (window.scrollY === 0) {
                setIsScroll(false);
            }
        };
        window.addEventListener("scroll", scrollHandler);

        return () => window.removeEventListener("scroll", scrollHandler);
    }, [isMenu, isScroll]);

    return (
        <header>
            <a href='#' className={styles.logo}>
                <img src={logo} alt='' /></a>
            <div id={styles.menu} onClick={menuDrop} />
            <nav className={`${styles.navbar}
            ${isMenu && styles['nav-toggle']}`}>
                <a onClick={menuDrop}>✖</a>
                <a href='#1'>Home</a>
                <a href='#2'>Product</a>
                <a href='#3'>About</a>
                <a href='#4'>Service</a>
                <a href='#5'>Review</a>
                <a href='#6'>Contact</a>
            </nav>
            {isScroll &&
                <a href='#top' id={styles['scroll-top']}>⥉</a>}
        </header>
    );
};

export default Header;