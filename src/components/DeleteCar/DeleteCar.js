import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

import styles from './styles/DeleteCar.module.css';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { useCarContext } from '../../contexts/CarContext';

import { carServiceFactory } from '../../services/carService';

export const DeleteCar = () => {

    const navigate = useNavigate();

    const { carId } = useParams();

    const { user } = useAuthContext();
    const { onDeleteHandler } = useCarContext();

    const carService = carServiceFactory(user.accessToken);

    const [car, setCar] = useState({});


    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result);
            })
            // eslint-disable-next-line
    }, []);

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog className={styles.modal}>
                <Modal.Header>
                    <Modal.Title className={styles.modal__title}>Are you sure you want to remove this car?</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Card >
                        <Card.Img variant="top" src={car.imageUrl} />
                        <Card.Title className={styles.car__title}>{car.manufacturer} {car.model}</Card.Title>
                    </Card>

                </Modal.Body>

                <Modal.Footer className={styles.buttons}>
                    <Button variant="secondary" onClick={() => navigate('/catalog')}>Go back</Button>
                    <Button variant="primary" className={styles.confirm__btn} onClick={() => onDeleteHandler(carId)}>Delete</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}