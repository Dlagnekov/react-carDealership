import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const Logout = () => {
    const navigate = useNavigate();

    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        setModalShow(true);
        onLogout();
            // eslint-disable-next-line
    }, []);

    const { onLogout } = useContext(AuthContext);

    const onGoodbye = () => {
        setModalShow(false);
        navigate('/');
        let activeNav = document.querySelector('.active');
        if (activeNav) {
            activeNav.className = "Header_nav-link__Pk1Nv nav-link";
        }
    }


    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalShow}
            onHide={onGoodbye}
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter" style={{ margin: "auto" }}>
                    <h1 style={{ textAlign: "center" }}>See you soon!</h1>
                    <h2 style={{ textAlign: "center" }}>Drive carefully!</h2>
                </Modal.Title>
            </Modal.Header>

            <Modal.Footer>
                <Button onClick={onGoodbye} style={{ margin: "auto" }}>Goodbye</Button>
            </Modal.Footer>
        </Modal >
    );

};