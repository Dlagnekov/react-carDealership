import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './styles/EditCar.module.css';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { useCarContext } from '../../contexts/CarContext';

import { useForm } from '../../hooks/useForm';

import { carServiceFactory } from '../../services/carService';


export const EditCar = () => {

    const { userId } = useAuthContext();

    const carService = carServiceFactory();

    const { carId } = useParams();
    const { onCarEditSubmit } = useCarContext();

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                changeValues(result);
            })
        // eslint-disable-next-line
    }, []);



    const { values, changeHandler, onSubmit, changeValues, validationObject } = useForm({
        manufacturer: '',
        model: '',
        year: '',
        mileage: '',
        engine: '',
        price: '',
        imageUrl: '',
        description: '',
        ownerId: userId,
    }, onCarEditSubmit);

    const style = {
        color: 'red',
    }

    return (

        <Form className={styles.form} onSubmit={onSubmit}>
            <h2 className={styles.title}>Edit form</h2>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor='manufacturer'>Manufacturer</Form.Label>
                <Form.Control type="text" placeholder="Enter manufacturer" name="manufacturer" value={values.manufacturer} onChange={changeHandler} />

                {!validationObject.manufacturer && (
                    <p id='manufacturerForm' style={style}>
                        The manufacturer should be between 3 and 10 characters!
                    </p>
                )}

            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" placeholder="Enter model..." name="model" value={values.model} onChange={changeHandler} />

                {!validationObject.model && (
                    <p id='modelForm' style={style}>
                        The model should be between 3 and 10 characters!
                    </p>
                )}

            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" placeholder="Enter year..." name="year" value={values.year} onChange={changeHandler} />

                {!validationObject.year && (
                    <p id='yearForm' style={style}>
                        The year should be a number!
                    </p>
                )}

            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Mileage</Form.Label>
                <Form.Control type="text" placeholder="Enter mileage..." name="mileage" value={values.mileage} onChange={changeHandler} />

                {!validationObject.mileage && (
                    <p id='mileageForm' style={style}>
                        The mileage should be a number!
                    </p>
                )}

            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Engine</Form.Label>
                <Form.Control type="text" placeholder="Enter engine..." name="engine" value={values.engine} onChange={changeHandler} />

                {!validationObject.engine && (
                    <p id='engineForm' style={style}>
                        The engine should be at least 2 characters long!
                    </p>
                )}

            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Enter price..." name="price" value={values.price} onChange={changeHandler} />

                {!validationObject.price && (
                    <p id='priceForm' style={style}>
                        The price should be a number!
                    </p>
                )}

            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Image</Form.Label>
                <Form.Control type="imageUrl" placeholder="Enter image..." name="imageUrl" value={values.imageUrl} onChange={changeHandler} />

                {!validationObject.imageUrl && (
                    <p id='imageUrlForm' style={style}>
                        Enter a valid image URL format!
                    </p>
                )}

            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description..." name="description" value={values.description} onChange={changeHandler} />

                {!validationObject.description && (
                    <p id='descriptionForm' style={style}>
                        The description should be at least 5 characters long!
                    </p>
                )}

            </Form.Group>

            <div className={styles.footer}>

                {!validationObject.isPopulated && (
                    <p id='errorForm' style={style}>
                        All fields are required!
                    </p>
                )}

                <Button variant="primary" type="submit">
                    Edit
                </Button>

            </div>

        </Form>

    );
};