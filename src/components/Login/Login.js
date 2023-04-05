import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './styles/Login.module.css'

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Login = () => {

    const { onLoginSubmit, validation } = useAuthContext();

    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    const style = {
        color: 'red',
        display: 'none'
    }

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
                    <p id='emailForm' style={style}>
                        The email should be in an email format!
                    </p>
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
                    <p id='passwordForm' style={style}>
                        The password should be between 5 and 10 characters!
                    </p>
                </Form.Group>

                {!validation && (
                    <p style={{ color: "#0d6efd" }}>Wrong email or password!</p>
                )}

                <p id='errorForm' style={style}>
                    All fields are required!
                </p>

                <Button variant="primary" onClick={onSubmit}>
                    Login
                </Button>
            </Form>

        </div>

    );
};