import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { carServiceFactory } from '../services/carService';
import { useAuthContext } from '../contexts/AuthContext';

export const CarContext = createContext();

export const CarProvider = ({
    children,
}) => {

    const navigate = useNavigate();

    const [cars, setCars] = useState([]);

    const { user } = useAuthContext();

    const carService = carServiceFactory(user?.accessToken);

    useEffect(() => {

        carService.getAll()
            .then(result => setCars(result));
        // eslint-disable-next-line
    }, []);

    const onListCarSubmit = async (data) => {
        const newCar = await carService.create(data);

        setCars(state => [...state, newCar]);

        let activeNav = document.querySelector('.active');
        if (activeNav) {
            activeNav.className = "Header_nav-link__Pk1Nv nav-link";
        }

        navigate('/catalog');

    };

    const onCarEditSubmit = async (values) => {
        const result = await carService.edit(values._id, values);

        setCars(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog`);
    }

    const onDeleteHandler = async (carId) => {
        await carService.delete(carId);
        setCars(state => state.filter(x => x._id !== carId));
        navigate('/catalog');
    };



    const carContextValues = {
        cars,
        onListCarSubmit,
        onCarEditSubmit,
        onDeleteHandler,
    }


    return (
        <CarContext.Provider value={carContextValues}>
            {children}
        </CarContext.Provider>
    );

};


export const useCarContext = () => {
    const context = useContext(CarContext);

    return context;
};
