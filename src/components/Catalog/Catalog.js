import { CarCard } from '../CarCard/CarCard';

import styles from './styles/Catalog.module.css';

export const Catalog = ({
    cars,
}) => {

    return (
        <div className={styles["card-list"]}>

            {cars.map(car => <CarCard key={car._id} {...car} />)}

        </div>
    );
};