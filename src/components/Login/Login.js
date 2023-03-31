import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export const Login = () => {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const { onLoginSubmit } = useAuthContext();

    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    const handleClose = (e) => {
        setShow(false);
        let activeNav = document.querySelector('.active');
        if (activeNav) {
            activeNav.className = "Header_nav-link__Pk1Nv nav-link";
        }
        navigate('/');
    }
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow();
    }, []);

    const onFormSubmit = (e) => {
        handleClose(e);
        onSubmit(e);
    };

    return (

        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                            name="email"
                            value={values.email}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Input password..."
                            name="password"
                            value={values.password}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={onFormSubmit}>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>

    );
};