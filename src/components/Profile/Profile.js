import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './styles/Profile.module.css';

import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { driveServiceFactory } from '../../services/driveService';
import { ProfileCarCard } from '../CarCard/ProfileCarCard/ProfileCarCard';
import { useEffect, useState } from 'react';

export const Profile = () => {

    const { userId } = useAuthContext();
    const [cars, setCars] = useState([]);
    const [showBooked, setShowBooked] = useState(false);

    const driveService = driveServiceFactory();

    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        driveService.getAll(userId)
            .then((result) => {
                setCars(result);
            });
        // eslint-disable-next-line
    }, [userId])

    const onShowBooked = () => {
        setShowBooked(!showBooked);
    };


    return (

        <>

            <div className={styles["background-container"]}>

                <Card className={styles.card}>

                    <Card.Body className={styles.profile__body}>

                        <Card.Title className={styles.title}> Welcome, <span style={{ textDecoration: "underline" }}>{user.username}</span></Card.Title>

                        <ListGroup variant="flush">

                            <ListGroup.Item className={styles["profileInfo_list"]}>Email - {user.email}</ListGroup.Item>

                        </ListGroup>

                        <div className={styles.buttons}>

                            {!showBooked && (
                                <Button className={styles.book__btn} variant="primary" onClick={onShowBooked}><Link className={styles.links}>Show booked test drives</Link></Button>
                            )}
                            {showBooked && (
                                <Button className={styles.book__btn} variant="primary" onClick={onShowBooked}><Link className={styles.links}>Hide booked test drives</Link></Button>
                            )}

                        </div>

                    </Card.Body>
                </Card>
            </div>

            {showBooked && (

                <div className={styles["background-container"]}>

                    {cars.map(car => <ProfileCarCard key={car._id} {...car} />)}

                </div>

            )}

        </>


    );
};