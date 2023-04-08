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

    // console.log(values);

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {

        e.preventDefault();

            const valuesTrimmed = { ...values };

            for (let key in valuesTrimmed) {

                if (key !== '_createdOn') {
                    valuesTrimmed[key].trim();
                    
                }
            }


            if (validation(values, setValidationObject)) {
                onSubmitHandler(values);
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