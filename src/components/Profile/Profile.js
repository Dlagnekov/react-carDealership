import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './styles/Profile.module.css';

import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

export const Profile = () => {

    const { user } = useAuthContext();


    return (

        <div className={styles["background-container"]}>

            <Card className={styles.card}>

                <Card.Body className={styles.profile__body}>

                    <Card.Title className={styles.title}> Welcome, <span style={{ textDecoration: "underline" }}>{user.username}</span></Card.Title>

                    <ListGroup variant="flush">

                        <ListGroup.Item className={styles["profileInfo_list"]}>Email - {user.email}</ListGroup.Item>

                    </ListGroup>

                    <div className={styles.buttons}>
                        <Button className={styles.back__btn} variant="primary"><Link to={`/catalog`} className={styles.links}>Back to catalog</Link></Button>
                        <Button className={styles.book__btn} variant="primary"><Link to={`/catalog`} className={styles.links}>Booked test drives</Link></Button>

                    </div>

                </Card.Body>
            </Card>


        </div>


    );
};