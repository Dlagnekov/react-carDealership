import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './styles/Profile.module.css';

import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { driveServiceFactory } from '../../services/driveService';
import { ownerService } from '../../services/ownerService';
import { ProfileCarCard } from '../CarCard/ProfileCarCard/ProfileCarCard';
import { useEffect, useState } from 'react';

export const Profile = () => {

    const { userId } = useAuthContext();
    const [bookedCars, setBookedCars] = useState([]);
    const [ownedCars, setOwnedCars] = useState([]);
    const [showBooked, setShowBooked] = useState(false);
    const [showOwned, setShowOwned] = useState(false);

    const getOwnedCars = ownerService();

    const driveService = driveServiceFactory();

    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        driveService.getAll(userId)
            .then((result) => {
                setBookedCars(result);
            });

        getOwnedCars(userId)
            .then((result) => {
                setOwnedCars(result);
            });
        // eslint-disable-next-line
    }, [userId]);

    const onShowOwned = () => {
        setShowOwned(!showOwned);
    };

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

                            {!showOwned && (
                                <Button className={styles.created__btn} variant="primary" onClick={onShowOwned}><Link className={styles.links}>Show listed cars</Link></Button>
                            )}
                            {showOwned && (
                                <Button className={styles.created__btn} variant="primary" onClick={onShowOwned}><Link className={styles.links}>Hide listed cars</Link></Button>
                            )}

                            {!showBooked && (
                                <Button className={styles.book__btn} variant="primary" onClick={onShowBooked}><Link className={styles.links}>Show booked cars</Link></Button>
                            )}
                            {showBooked && (
                                <Button className={styles.book__btn} variant="primary" onClick={onShowBooked}><Link className={styles.links}>Hide booked cars</Link></Button>
                            )}

                        </div>

                    </Card.Body>
                </Card>
            </div>

            {showBooked && bookedCars && (

                <div>
                    <div className={styles.textContainer}>
                        <p className={styles.text}>Booked cars</p>
                    </div>
                    <div className={styles["background-container"]}>

                        {bookedCars.map(car => <ProfileCarCard key={car._id} {...car} />)}

                    </div>

                </div>

            )}

            {showBooked && bookedCars.length === 0 && (

                <div className={styles.noBookedCars}>

                    <p className={styles.text}>No booked cars for the moment!</p>

                </div>

            )}

            {showOwned && ownedCars && (
                <div>
                    <div className={styles.textContainer}>
                        <p className={styles.text}>Listed cars</p>
                    </div>

                    <div className={styles["background-container"]}>

                        {ownedCars.map(car => <ProfileCarCard key={car._id} {...car} />)}

                    </div>

                </div>

            )}

            {showOwned && ownedCars.length === 0 && (

                <div className={styles.noBookedCars}>

                    <p className={styles.text}>You haven't listed any cars yet!</p>

                </div>

            )}

        </>


    );
};