export default function validation(values) {

    const inputs = Object.values(values);

    
    if (values.manufacturer.length < 3 || values.manufacturer.length > 10) {
        document.querySelector('.ListCar_manufacturer__p3jlc').style.display = 'block';
        throw new Error('Validation error!');
    } else {
        document.querySelector('.ListCar_manufacturer__p3jlc').style.display = 'none';
    }
    
    if (values.model.length < 3 || values.model.length > 10) {
        document.querySelector('.ListCar_model__ubeC6').style.display = 'block';
        throw new Error('Validation error!');
    } else {
        document.querySelector('.ListCar_model__ubeC6').style.display = 'none';
    }
    
    if (!Number(values.year)) {
        document.querySelector('.ListCar_year__NkRTS').style.display = 'block';
        throw new Error('Validation error!');
    } else {
        document.querySelector('.ListCar_year__NkRTS').style.display = 'none';
    }
    
    if (!Number(values.mileage)) {
        document.querySelector('.ListCar_mileage__7Skn6').style.display = 'block';
        throw new Error('Validation error!');
    } else {
        document.querySelector('.ListCar_mileage__7Skn6').style.display = 'none';
    }
    
    if (values.engine.length < 2) {
        document.querySelector(`.ListCar_engineCode__PZDyp`).style.display = 'block';
        throw new Error('Validation error!');
    } else {
        document.querySelector(`.ListCar_engineCode__PZDyp`).style.display = 'none';
    }
    
    if (!Number(values.price)) {
        document.querySelector('.ListCar_price__5jm3a').style.display = 'block';
        throw new Error('Validation error!');
    } else {
        document.querySelector('.ListCar_price__5jm3a').style.display = 'none';
    }
    
    const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/;
    
    if (!urlRegex.test(values.imageUrl)) {
        document.querySelector('.ListCar_imageUrlCode__UGoWt').style.display = 'block';
    } else {
        document.querySelector('.ListCar_imageUrlCode__UGoWt').style.display = 'none';
    }
    
    if (values.description.length < 5) {
        document.querySelector('.ListCar_description__Uh4ag').style.display = 'block';
    } else {
        document.querySelector('.ListCar_description__Uh4ag').style.display = 'none';
    }
    
    inputs.map((x) => {
        if(x === ''){
            document.querySelector('.ListCar_error__ZXAlU').style.display = 'block'
            throw new Error('Validation error!');
        } else{
            return x;
        }
    });
};