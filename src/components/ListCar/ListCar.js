import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './styles/ListCar.module.css';

import { useCarContext } from '../../contexts/CarContext';
import { useAuthContext } from '../../contexts/AuthContext';

import { useForm } from '../../hooks/useForm';


export const ListCar = () => {


    const { userId } = useAuthContext();
    const { onListCarSubmit } = useCarContext();

    const { values, changeHandler, onSubmit } = useForm({
        manufacturer: '',
        model: '',
        year: '',
        mileage: '',
        engine: '',
        price: '',
        imageUrl: '',
        description: '',
        ownerId: userId,
    }, onListCarSubmit);


    return (

        <Form className={styles.form} onSubmit={onSubmit}>
            <h2 className={styles.title}>List a car</h2>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor='manufacturer'>Manufacturer</Form.Label>
                <Form.Control type="text" placeholder="Enter manufacturer" name="manufacturer" value={values.manufacturer} onChange={changeHandler} />
                <Form.Text className={styles.manufacturer}>
                    The manufacturer should be between 3 and 10 characters!
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" placeholder="Enter model..." name="model" value={values.model} onChange={changeHandler} />
                <Form.Text className={styles.model}>
                    The model should be between 3 and 10 characters!
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" placeholder="Enter year..." name="year" value={values.year} onChange={changeHandler} />
                <Form.Text className={styles.year}>
                    The year should be a number!
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Mileage</Form.Label>
                <Form.Control type="text" placeholder="Enter mileage..." name="mileage" value={values.mileage} onChange={changeHandler} />
                <Form.Text className={styles.mileage}>
                    The mileage should be a number!
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Engine</Form.Label>
                <Form.Control type="text" placeholder="Enter engine..." name="engine" value={values.engine} onChange={changeHandler} />
                <Form.Text className={styles.engineCode}>
                    The engine should be at least 2 characters long!
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter price..." name="price" value={values.price} onChange={changeHandler} />
                <Form.Text className={styles.price}>
                    The price should be a number!
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Image</Form.Label>
                <Form.Control type="imageUrl" placeholder="Enter image..." name="imageUrl" value={values.imageUrl} onChange={changeHandler} />
                <Form.Text className={styles.imageUrlCode}>
                    Enter a valid image URL format!
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description..." name="description" value={values.description} onChange={changeHandler} />
                <Form.Text className={styles.description}>
                    The description should be at least 5 characters long!
                </Form.Text>
            </Form.Group>
            <div className={styles.footer}>

                <Form.Text className={styles.error}>
                    All fields are required!
                </Form.Text>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </div>

        </Form>
    );
};