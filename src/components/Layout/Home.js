import Button from '../UI/Button';
import useRead from '../../hooks/use-read';
import styles from './Home.module.css';

const text = 'Lorem ipsum dolor sit amet, consectetur\
 adipiscing elit,sed do eiusmod tempor incididunt ut labore\
 et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud\
 exercitation ullamco laboris nisi ut aliquip ex ea commodo\
 consequat.Duis aute irure dolor in reprehenderit in voluptate\
 velit esse cillum fugiat nulla pariatur.'

const Home = () => {
    const { growth, readMoreHandler: readMore } = useRead();

    return (
        <section className={styles.home} id='1'>
            <div className={styles.content}>
                <h3>healthy food, healthy life.</h3>
                <p>{growth ? text : text.substring(0, 122)}</p>
                <Button name={growth ? 'discover less'
                    : 'discover more'} onClick={readMore} />
            </div>
        </section>
    );
};

export default Home;