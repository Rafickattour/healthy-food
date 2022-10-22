import Heading from '../UI/Heading';
import Button from '../UI/Button';
import useRead from '../../hooks/use-read';
import styles from './About.module.css';
import about from '../../assets/Images/about-img.jpg';

const text = 'Lorem ipsum dolor sit amet consectetur adipisicing\
 elit.Explicabo blanditiis ipsam iusto odio omnis\
 illo cum necessitatibus officiis, iure laboriosam!'

const About = () => {
    const { growth, readMoreHandler: readMore } = useRead();

    return (
        <section className={styles.about} id='3'>
            <Heading title='about us' />
            <div className={styles.row}>
                <div className={styles.image}>
                    <img src={about} alt='' />
                </div>
                <div className={styles.content}>
                    <h3>why choose us?</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nemo quod voluptate debitis dolor beatae explicabo,
                        est obcaecati distinctio, mollitia provident nostrum accusamus
                        aspernatur quas, pariatur neque rem voluptas expedita temporibus.</p>
                    {growth && <p>{text}</p>}
                    <Button name={growth ? 'learn less'
                        : 'learn more'} onClick={readMore} />
                </div>
            </div>
        </section>
    );
};

export default About;