import { useState } from 'react';
import validation from '../common/validation';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            validation(values);
            onSubmitHandler(values);

        } catch (err) {
            console.log(`${err} -- Error`);
            return;
        }
    };

    const changeValues = (oldValues) => {
        // TODO: Validate newValues shape (like initialValues)

        setValues(oldValues);
    };

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues,
    };
};