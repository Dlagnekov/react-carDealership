import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const handleClose = (e) => {
        setShow(false);
        let activeNav = document.querySelector('.active');
        activeNav.className = "Header_nav-link__Pk1Nv nav-link";
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
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={values.username}
                            onChange={changeHandler}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
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

                    <Form.Group className="mb-3">
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Repeat password..."
                            name="confirmPassword"
                            value={values.confirmPassword}
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
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>

    );

};