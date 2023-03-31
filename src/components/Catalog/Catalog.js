import { CarCard } from '../CarCard/CarCard';

import styles from './styles/Catalog.module.css';

import { useCarContext } from '../../contexts/CarContext';

export const Catalog = () => {

    const { cars } = useCarContext();
    
    return (
        <div className={styles["card-list"]}>
            
            {cars && (cars.map(car => <CarCard key={car._id} {...car} />))}
            {!cars && (<h1>No cars</h1>)}

        </div>
    );
};