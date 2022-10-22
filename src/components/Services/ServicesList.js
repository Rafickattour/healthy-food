import Heading from '../UI/Heading';
import ServiceType from './ServiceType';
import styles from './ServicesList.module.css';
import apple from '../../assets/Icons/apple.ico';
import trophie from '../../assets/Icons/certificate.ico';
import inTransit from '../../assets/Icons/in-transit.ico';
import returns from '../../assets/Icons/returns.ico';
import truck from '../../assets/Icons/truck.ico';
import support from '../../assets/Icons/support.ico';

const text = 'Lorem ipsum dolor sit amet consectetur\
 adipisicing elit. Magnam excepturi voluptatem eos\
 nulla iure dolorem porro expedita deserunt at ea.'

const DUMMY_SERVICES = [
    {
        id: 1,
        image: apple,
        name: 'organic food',
        description: text
    },
    {
        id: 2,
        image: trophie,
        name: 'high quality',
        description: text
    },
    {
        id: 3,
        image: inTransit,
        name: 'fast delivery',
        description: text
    },
    {
        id: 4,
        image: returns,
        name: 'easy returns',
        description: text
    },
    {
        id: 5,
        image: truck,
        name: 'free delivery',
        description: text
    },
    {
        id: 6,
        image: support,
        name: '24 x 7 support',
        description: text
    },
];

const ServicesList = () => {
    const servicesList = DUMMY_SERVICES.map((service) => (
        <ServiceType
            key={service.id}
            {...service} />
    ));
    return (
        <section className={styles.service} id='4'>
            <Heading title='our services' />
            <ul>{servicesList}</ul>
        </section>
    );
};

export default ServicesList;