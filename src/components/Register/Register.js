import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useContext } from "react";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

import styles from './styles/Register.module.css'

export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (

        <div className={styles.register}>
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
                <Button variant="primary" onClick={onSubmit}>
                    Register
                </Button>
            </Form>

        </div>
    );

};