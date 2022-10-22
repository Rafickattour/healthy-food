import Heading from '../UI/Heading';
import ReviewUser from './ReviewUser';
import styles from './ReviewsList.module.css';
import pic1 from '../../assets/Images/pic1.png';
import pic2 from '../../assets/Images/pic2.png';
import pic3 from '../../assets/Images/pic3.png';
import pic4 from '../../assets/Images/pic4.png';

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
 Voluptatum expedita nulla. Error hic facilis impedit ut inventore'

const DUMMY_REVIEWS = [
    {
        id: 1,
        image: pic1,
        name: 'ranya mila',
        job: 'prototype leader',
        message: text
    },
    {
        id: 2,
        image: pic2,
        name: 'john deo',
        job: 'web designer',
        message: text
    },
    {
        id: 3,
        image: pic3,
        name: 'olga emilia',
        job: 'quality manager',
        message: text
    },
    {
        id: 4,
        image: pic4,
        name: 'daniel majdi',
        job: 'database specialist',
        message: text
    }
];

const ReviewsList = (props) => {
    const copyHandler = () => {
        props.showSnackbar();
        navigator.clipboard.writeText(text);
    };

    const reviewsList = DUMMY_REVIEWS.map((review) => (
        <ReviewUser
            key={review.id}
            {...review}
            onCopy={copyHandler}
            onMake={props.onShowCart} />
    ));

    return (
        <section className={styles.review} id='5'>
            <Heading title="people's review" />
            <ul>{reviewsList}</ul>
        </section>
    );
};

export default ReviewsList;