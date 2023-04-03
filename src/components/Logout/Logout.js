import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const Logout = () => {
    const navigate = useNavigate();

    const [modalShow, setModalShow] = useState(false);
    const { onLogout } = useContext(AuthContext);

    useEffect(() => {
        setModalShow(true);
        onLogout();
        navigate('/');
        let activeNav = document.querySelector('.active');
        if (activeNav) {
            activeNav.className = "Header_nav-link__Pk1Nv nav-link";
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalShow}
            // onHide={onGoodbye}
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter" style={{ margin: "auto" }}>
                    <h1 style={{ textAlign: "center" }}>See you soon!</h1>
                    <h2 style={{ textAlign: "center" }}>Drive carefully!</h2>
                </Modal.Title>
            </Modal.Header>

            <Modal.Footer>
                <Button  style={{ margin: "auto" }}>Goodbye</Button>
            </Modal.Footer>
        </Modal >
    );

};