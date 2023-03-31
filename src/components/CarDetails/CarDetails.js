import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './styles/CarDetails.module.css';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

import { carServiceFactory } from '../../services/carService';

export const CarDetails = () => {

    const { user } = useAuthContext();

    const { carId } = useParams();

    const carService = carServiceFactory();

    const [car, setCar] = useState({});


    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result);
            })
            // eslint-disable-next-line
    }, []);


    return (

        <div className={styles["background-container"]}>

            <Card className={styles.card}>
                <Card.Img className={styles.car__img} variant="top" src={car.imageUrl} />
                <Card.Body className={styles.car__body}>

                    <Card.Title className={styles.title}>{car.manufacturer} {car.model}</Card.Title>

                    <ListGroup variant="flush">

                        <ListGroup.Item className={styles["carInfo_list"]}>Year - {car.year}</ListGroup.Item>
                        <ListGroup.Item className={styles["carInfo_list"]}>Mileage - {car.mileage}</ListGroup.Item>
                        <ListGroup.Item className={styles["carInfo_list"]}>Engine - {car.engine}</ListGroup.Item>
                        <ListGroup.Item className={styles["carInfo_list_price"]}>Price - {car.price} BGN</ListGroup.Item>

                    </ListGroup>
                    <Card.Text className={styles.description}>{car.description}</Card.Text>
                    <div className={styles.buttons}>
                        <Button className={styles.back__btn} variant="primary"><Link to={`/catalog`} className={styles.links}>Back to catalog</Link></Button>
                        {user && car._ownerId !== user._id && (
                            <Button className={styles.book__btn} variant="primary"><Link to={`/catalog/${car._id}/book`} className={styles.links}>Book test drive</Link></Button>
                        )}
                    </div>

                </Card.Body>
            </Card>


        </div>


    );
};