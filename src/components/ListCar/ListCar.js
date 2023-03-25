import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './styles/ListCar.module.css';

import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';


export const ListCar = ({
    onListCarSubmit,
}
) => {

    const { userId } = useContext(AuthContext);


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
                {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" placeholder="Enter model..." name="model" value={values.model} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" placeholder="Enter year..." name="year" value={values.year} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Mileage</Form.Label>
                <Form.Control type="text" placeholder="Enter mileage..." name="mileage" value={values.mileage} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Engine</Form.Label>
                <Form.Control type="text" placeholder="Enter engine..." name="engine" value={values.engine} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter price..." name="price" value={values.price} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Image</Form.Label>
                <Form.Control type="imageUrl" placeholder="Enter image..." name="imageUrl" value={values.imageUrl} onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control type="imageUrl" placeholder="Enter description..." name="description" value={values.description} onChange={changeHandler} />
            </Form.Group>

            {/* <Form.Group className="mb-3" >
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
    );
};