import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './styles/Login.module.css'

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { useEffect } from 'react';

export const Login = () => {

    const { onLoginSubmit, validation, setValidation } = useAuthContext();

    const { values, changeHandler, onSubmit, validationObject } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    const style = {
        color: 'red',
    }

    useEffect(() => {
        setValidation(true);
        // eslint-disable-next-line
    }, [])


    return (

        <div className={styles.login}>
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
                            The password should be more than 5 characters!
                        </p>
                    )}
                </Form.Group>

                {!validation && (
                    <p style={{ color: "#0d6efd", ...style }}>Wrong email or password!</p>
                )}


                {!validationObject.isPopulated && (
                    <p id='errorForm' style={style}>
                        All fields are required!
                    </p>
                )}

                <Button variant="primary" onClick={onSubmit}>
                    Login
                </Button>
            </Form>

        </div>

    );
};