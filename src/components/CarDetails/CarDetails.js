import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Popover from 'react-bootstrap/Popover';
import styles from './styles/CarDetails.module.css';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

import { carServiceFactory } from '../../services/carService';
import { driveServiceFactory } from '../../services/driveService';

export const CarDetails = () => {

    const { user, userId } = useAuthContext();

    const { carId } = useParams();

    const carService = carServiceFactory();
    const driveService = driveServiceFactory(user?.accessToken);

    const [car, setCar] = useState({});
    const [booked, setBooked] = useState(false);
    const [bookConfirm, setBookConfirm] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result);
            });
        driveService.getAll(userId)
            .then((result) => {
                console.log(result);
                result.map(x => x.carId === carId ? setBooked(true) : x);
            });
        // eslint-disable-next-line
    }, [userId]);

    const onBook = async (carId, carManufacturer, carModel, userId, userUsername, userEmail) => {
        await driveService.book(carId, carManufacturer, carModel, userId, userUsername, userEmail);
        setBookConfirm(false);
    };

    const onClosePopover = () => {
        setBookConfirm(false);
    }

    const onOpenPopover = () => {
        setBookConfirm(true);
    }

    const onClickBook = () => {
        onBook(carId, car.manufacturer, car.model, userId, user.username, user.email);
        setBookConfirm(false);
        navigate('/catalog');
    };


    console.log(booked);


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

                    {booked && (
                        <Card.Text className={styles.alreadyBooked}> You have already booked a test drive for this car! </Card.Text>
                    )}

                    <div className={styles.buttons}>

                        <Button className={styles.back__btn} variant="primary"><Link to={`/catalog`} className={styles.links}>Back to catalog</Link></Button>

                        {user && car._ownerId !== user._id && !booked && (
                            <Button className={styles.book__btn} variant="primary" onClick={onOpenPopover} ><Link className={styles.links} >Book test drive</Link></Button>
                        )}

                    </div>

                    {bookConfirm && (
                        <>
                            <Popover id="popover-basic" className={styles.popover}>
                                <Popover.Header as="h3" className={styles.popover__Head}>Confirm booking</Popover.Header>
                                <Popover.Body>
                                    <p>Do you want to book a test drive?</p>
                                    <p>We will contact you via email for further details!</p>
                                </Popover.Body>
                                <div className={styles.popover__Buttons}>
                                    <Button className={styles.back__btn} onClick={onClosePopover}>Close</Button>
                                    <Button className={styles.book__btn} onClick={onClickBook}>Book</Button>
                                </div>
                            </Popover>
                        </>
                    )}

                </Card.Body>
            </Card>


        </div>


    );
};