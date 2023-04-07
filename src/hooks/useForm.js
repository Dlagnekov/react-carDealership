import { useState } from 'react';
import validation from '../common/validation';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [validationObject, setValidationObject] = useState({
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
        manufacturer: true,
        model: true,
        year: true,
        mileage: true,
        engine: true,
        price: true,
        imageUrl: true,
        description: true,
        isPopulated: true,
    })

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {

        const valuesTrimmed = { ...values };
        for (let key in valuesTrimmed) {
            valuesTrimmed[key].trim();
        }

        e.preventDefault();

        if (validation(valuesTrimmed, setValidationObject)) {
            onSubmitHandler(valuesTrimmed);
        }

    };

    const changeValues = (oldValues) => {

        setValues(oldValues);
    };

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues,
        validationObject,
    };
};