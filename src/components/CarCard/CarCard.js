import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import styles from './styles/Car.module.css';

import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

export const CarCard = ({
    manufacturer,
    model,
    price,
    imageUrl,
    description,
    _id,
    _ownerId,
}) => {

    const { user } = useAuthContext();

    return (

        <Card className={styles.card}>
            <Card.Img className={styles.car__img} variant="top" src={imageUrl} />
            <Card.Body className={styles.car__body}>
                <div className={styles.card__heading}>
                    <Card.Title className={styles.title}>{manufacturer} {model}</Card.Title>
                    <Button variant="primary" className={styles.details__btn}> <Link to={`/catalog/${_id}/details`} className={styles.links}>Details</Link> </Button>
                </div>
                <ListGroup variant="flush">

                    <ListGroup.Item className={styles["carInfo_list_price"]}>Price - {price} BGN</ListGroup.Item>

                </ListGroup>
                <Card.Text className={styles.description}>{description}</Card.Text>
                {user && user._id === _ownerId && (
                    <div className={styles.buttons}>
                        <Button className={styles.edit__btn} variant="primary"><Link to={`/catalog/${_id}/edit`} className={styles.links}>Edit</Link></Button>
                        <Button className={styles.delete__btn} variant="primary"><Link to={`/catalog/${_id}/delete`} className={styles.links}>Delete</Link></Button>
                    </div>
                )}
                {/* {!isAuthenticated && (
                    <div className={styles.buttons}>
                        <Button className={styles.edit__btn} variant="primary"><Link to={`/catalog/${_id}/edit`} className={styles.links}>Edit</Link></Button>
                    </div>
                )} */}

            </Card.Body>
        </Card>

    );
};