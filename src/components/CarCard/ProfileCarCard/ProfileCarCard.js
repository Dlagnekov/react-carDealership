import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import styles from './styles/ProfileCarCard.module.css';

export const ProfileCarCard = ({
    manufacturer,
    model,
    imageUrl,
    carId,
}) => {

    return (

        <Card className={styles.card}>
            <Card.Img className={styles.car__img} variant="top" src={imageUrl} />

            <Card.Body className={styles.car__body}>
                <div className={styles.card__heading}>
                    <Card.Title className={styles.title}>{manufacturer} {model}</Card.Title>
                    <Button variant="primary" className={styles.details__btn}> <Link to={`/catalog/${carId}/details`} className={styles.links}>Details</Link> </Button>
                </div>

            </Card.Body>
        </Card>

    );
};