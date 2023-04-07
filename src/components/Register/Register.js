import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useContext } from "react";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

import styles from './styles/Register.module.css'

export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit, validationObject } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    const style = {
        color: 'red',
    }

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

                    {!validationObject.username && (
                        <p id='usernameForm' style={style}>
                            The username should be between 2 and 10 characters!
                        </p>
                    )}

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

                    {!validationObject.email && (
                        <p id='emailForm' style={style}>
                            The email should be in an email format!
                        </p>
                    )}
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

                    {!validationObject.password && (
                        <p id='passwordForm' style={style}>
                            The password should be between 5 and 10 characters!
                        </p>
                    )}

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

                    {!validationObject.confirmPassword && (
                        <p id='repeatPasswordForm' style={style}>
                            Password doesn't match!
                        </p>
                    )}

                </Form.Group>

                {!validationObject.isPopulated && (
                    <p id='errorForm' style={style}>
                        All fields are required!
                    </p>
                )}


                <Button variant="primary" onClick={onSubmit}>
                    Register
                </Button>
            </Form>

        </div>
    );

};