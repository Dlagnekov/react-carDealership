import { CarCard } from '../CarCard/CarCard';

import styles from './styles/Catalog.module.css';

import { useCarContext } from '../../contexts/CarContext';
import { NoAvailableCars } from './NoAvailableCars/NoAvailableCars';
import { useEffect, useState } from 'react';

export const Catalog = () => {

    const { cars } = useCarContext();

    const [listed, setListed] = useState(false);

    useEffect(() => {
        if (cars.length !== 0) {
            setListed(true);
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className={styles["card-list"]}>

            {listed && (cars.map(car => <CarCard key={car._id} {...car} />))}
            {!listed && (<NoAvailableCars />)}

        </div>
    );
};