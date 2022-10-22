import Heading from '../UI/Heading';
import ProductItem from './ProductItem';
import styles from './ProductsList.module.css';
import tomato from '../../assets/Images/img1.jpg';
import banana from '../../assets/Images/img2.jpg';
import grapes from '../../assets/Images/img3.jpg';
import lemon from '../../assets/Images/img4.jpg';
import broccoli from '../../assets/Images/img5.jpg';
import potato from '../../assets/Images/img6.jpg';
import pear from '../../assets/Images/img7.jpg';
import pepper from '../../assets/Images/img8.jpg';
import rate from '../../assets/Icons/star.ico';
import halfRate from '../../assets/Icons/half-star.ico';

const DUMMY_PRODUCTS = [
    {
        id: 1,
        image: tomato,
        name: 'organic tomato',
        rate1: rate,
        rate2: rate,
        rate3: rate,
        price: 12.10,
        offer: 15.5
    },
    {
        id: 2,
        image: banana,
        name: 'organic banana',
        rate1: rate,
        rate2: rate,
        rate3: rate,
        price: 12.10,
        offer: 15.5
    },
    {
        id: 3,
        image: grapes,
        name: 'organic grapes',
        rate1: rate,
        rate2: rate,
        rate3: rate,
        price: 12.10,
        offer: 15.5
    },
    {
        id: 4,
        image: lemon,
        name: 'organic lemon',
        rate1: rate,
        rate2: rate,
        rate3: rate,
        price: 12.10,
        offer: 15.5
    },
    {
        id: 5,
        image: pear,
        name: 'organic pear',
        rate1: rate,
        rate2: rate,
        rate3: rate,
        price: 12.10,
        offer: 15.5
    },
    {
        id: 6,
        image: broccoli,
        name: 'organic broccoli',
        rate1: rate,
        rate2: rate,
        rate3: rate,
        price: 12.10,
        offer: 15.5
    },
    {
        id: 7,
        image: potato,
        name: 'organic potato',
        rate1: rate,
        rate2: rate,
        rate3: rate,
        price: 12.10,
        offer: 15.5
    },
    {
        id: 8,
        image: pepper,
        name: 'organic pepper',
        rate1: rate,
        rate2: rate,
        rate3: rate,
        price: 12.10,
        offer: 15.5
    }
];

const ProductsList = ({ onShow }) => {
    const productsList = DUMMY_PRODUCTS.map((item) => (
        <ProductItem
            key={item.id}
            {...item}
            onShow={onShow} />
    ));
    return (
        <section className={styles.product} id='2'>
            <Heading title='featured products' />
            <ul>{productsList}</ul>
        </section>
    );
};

export default ProductsList;