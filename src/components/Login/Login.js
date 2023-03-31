import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './styles/Login.module.css'

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";


export const Login = () => {


    const { onLoginSubmit } = useAuthContext();

    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);


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
            <Button variant="primary" onClick={onSubmit}>
                Login
            </Button>
            </Form>
            
        </div>




        //     </Modal.Body>
        //     <Modal.Footer>
        //     </Modal.Footer>
        // </Modal>

    );
};