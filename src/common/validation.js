export default function validation(values) {

    console.log(values);


    if (values.manufacturer) {
        if (values.manufacturer.length < 3 || values.manufacturer?.length > 10) {
            document.querySelector('#manufacturerForm').style.display = 'block';
            throw new Error('Validation error!');
        } else {
            document.querySelector('#manufacturerForm').style.display = 'none';
        }
    }

    if (values.model) {
        if (values.model.length < 3 || values.model.length > 10) {
            document.querySelector('#modelForm').style.display = 'block';
            throw new Error('Validation error!');
        } else {
            document.querySelector('#modelForm').style.display = 'none';
        }
    }

    if (values.year) {
        if (!Number(values.year)) {
            document.querySelector('#yearForm').style.display = 'block';
            throw new Error('Validation error!');
        } else {
            document.querySelector('#yearForm').style.display = 'none';
        }
    }

    if (values.mileage) {
        if (!Number(values.mileage)) {
            document.querySelector('#mileageForm').style.display = 'block';
            throw new Error('Validation error!');
        } else {
            document.querySelector('#mileageForm').style.display = 'none';
        }
    }

    if (values.engine) {
        if (values.engine.length < 2) {
            document.querySelector(`#engineForm`).style.display = 'block';
            throw new Error('Validation error!');
        } else {
            document.querySelector(`#engineForm`).style.display = 'none';
        }
    }

    if (values.price) {
        if (!Number(values.price)) {
            document.querySelector('#priceForm').style.display = 'block';
            throw new Error('Validation error!');
        } else {
            document.querySelector('#priceForm').style.display = 'none';
        }
    }

    const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/;

    if (values.imageUrl) {
        if (!urlRegex.test(values.imageUrl)) {
            document.querySelector('#imageUrlForm').style.display = 'block';
            throw new Error('Validation error!');
        } else {
            document.querySelector('#imageUrlForm').style.display = 'none';
        }
    }

    if (values.description) {
        if (values.description.length < 5) {
            document.querySelector('#descriptionForm').style.display = 'block';
            throw new Error('Validation error!');
        } else {
            document.querySelector('#descriptionForm').style.display = 'none';
        }
    }

    const inputs = Object.values(values);

    inputs.map((x) => {
        if (x === '') {
            document.querySelector('#errorForm').style.display = 'block';
            throw new Error('Validation error!');
        } else {
            return document.querySelector('#errorForm').style.display = 'none';
        }
    });
};