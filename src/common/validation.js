export default function validation(values, setValidationObject) {

    let invalidNum = 0;

    if (values.username) {
        const isUsernameValid = values.username.length > 2 && values.username.length < 10;
        if (!isUsernameValid) {
            invalidNum++;
        }
        setValidationObject((prev) => {
            return {
                ...prev,
                username: isUsernameValid
            }
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (values.email) {
        const isEmailValid = emailRegex.test(values.email);
        if (!isEmailValid) {
            invalidNum++;
        }
        setValidationObject((prev) => {
            return {
                ...prev,
                email: isEmailValid
            }
        });
    }


    if (values.password) {
        const isPasswordValid = values.password.length > 5;
        if (!isPasswordValid) {
            invalidNum++;
        }
        setValidationObject((prev) => {
            return {
                ...prev,
                password: isPasswordValid
            }
        });
    }


    if (values.confirmPassword) {

        const isConfirmedPassValid = values.confirmPassword === values.password;

        if (!isConfirmedPassValid) {
            invalidNum++;
        }

        setValidationObject((prev) => {
            return {
                ...prev,
                confirmPassword: isConfirmedPassValid
            }
        });

    }


    if (values.manufacturer) {

        const isManufacturerValid = values.manufacturer.length > 3 && values.manufacturer.length < 10;

        if (!isManufacturerValid) {
            invalidNum++;
        }

        setValidationObject((prev) => {
            return {
                ...prev,
                manufacturer: isManufacturerValid
            }
        });

    }

    if (values.model) {

        const isModelValid = values.model.length > 3 && values.model.length < 10

        if (!isModelValid) {
            invalidNum++;
        }
        setValidationObject((prev) => {
            return {
                ...prev,
                model: isModelValid
            }
        });
    }

    if (values.year) {

        const isYearValid = !isNaN(values.year);

        if (!isYearValid) {
            invalidNum++;
        }

        setValidationObject((prev) => {
            return {
                ...prev,
                year: isYearValid
            }
        });

    }

    if (values.mileage) {

        const isMileageValid = !isNaN(values.mileage);

        if (!isMileageValid) {
            invalidNum++;
        }

        setValidationObject((prev) => {
            return {
                ...prev,
                mileage: isMileageValid
            }
        });
    }

    if (values.engine) {

        const isEngineValid = values.engine.length >= 2;

        if (!isEngineValid) {
            invalidNum++;
        }

        setValidationObject((prev) => {
            return {
                ...prev,
                engine: isEngineValid
            }
        });
    }

    if (values.price) {

        const isPriceValid = !isNaN(values.price);

        if (!isPriceValid) {
            invalidNum++;
        }

        setValidationObject((prev) => {
            return {
                ...prev,
                price: isPriceValid
            }
        });

    }

    const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+(?:png|jpg|jpeg|gif|svg)+$/;

    const isImageUrlValid = urlRegex.test(values.imageUrl);

    if (values.imageUrl) {

        if (!isImageUrlValid) {
            invalidNum++;
        }

        setValidationObject((prev) => {
            return {
                ...prev,
                imageUrl: isImageUrlValid
            }
        });

    }

    if (values.description) {

        const isDescriptionValid = values.description.length > 5;

        if (!isDescriptionValid) {
            invalidNum++;
        }

        setValidationObject((prev) => {
            return {
                ...prev,
                description: isDescriptionValid
            }
        });

    }

    const isFormPopulated = Object.values(values).every(v => v.length !== 0);

    if (!isFormPopulated) {
        invalidNum++;
    }

    setValidationObject((prev) => {
        return {
            ...prev,
            isPopulated: isFormPopulated
        }
    });


    return invalidNum === 0;
}

