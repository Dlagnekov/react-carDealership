import Card from 'react-bootstrap/Card';
import styles from './styles/NoAvailableCars.module.css';

export const NoAvailableCars = () => {

    return (

        <Card className={styles.container}>
            <Card.Body className={styles.text}>There are no listed cars for the moment!</Card.Body>
        </Card>

    );

};