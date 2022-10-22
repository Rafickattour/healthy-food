import styles from './Footer.module.css';
import logo from '../../assets/Images/logo.png';
import phone from '../../assets/Icons/phone.ico';
import mail from '../../assets/Icons/mail.ico';
import location from '../../assets/Icons/location.ico';
import youtube from '../../assets/Icons/youtube.ico';
import facebook from '../../assets/Icons/facebook.ico';
import twitter from '../../assets/Icons/twitter.ico';
import instagram from '../../assets/Icons/instagram.ico';

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles['box-container']}>
                <div className={styles.box}>
                    <img src={logo} alt='' />
                    <p>Lorem ipsum dolor sit amet consectetur,adipisicing
                        elit.Asperiores cumque reprehenderit labore dolorem
                        magni itaque,quod velit neque doloremque quidem.</p>
                </div>
                <div className={styles.box}>
                    <h3>contact details</h3>
                    <p><img src={phone} alt='' />+961-71-903224.</p>
                    <p><img src={mail} alt='' />example@gmail.com</p>
                    <p><img src={location} alt='' />akkar-lebanon.</p>
                </div>
                <div className={styles.box}>
                    <h3>follow us</h3>
                    <a href='#youtube'><img src={youtube} alt='' /></a>
                    <a href='#facebook'><img src={facebook} alt='' /></a>
                    <a href='#twitter'><img src={twitter} alt='' /></a>
                    <a href='#instagram'><img src={instagram} alt='' /></a>
                </div>
            </div>
            <h1 className={styles.credit}>
                created by <span>rafic kattour</span>
                {''} | all rights reserved! </h1>
        </section >
    );
};

export default Footer;