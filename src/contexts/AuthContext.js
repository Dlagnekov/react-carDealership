import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {

    const [user, setUser] = useState(undefined);
    const [validation, setValidation] = useState(true);

    const navigate = useNavigate();

    const authService = authServiceFactory(user?.accessToken);

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);

            setUser(result);
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/catalog');
        } catch (error) {
            setValidation(false);
            console.log('There is a problem');
        }
    };

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            localStorage.setItem('user', JSON.stringify(result));
            setUser(result);
            navigate('/catalog');
        } catch (error) {
            setValidation(false);
            console.log('There is a problem');
        }
    };

    const onLogout = async () => {
        await authService.logout();
        setUser(undefined);
        localStorage.clear();
    };

    useEffect(()=> {
        const userAsString = localStorage.getItem('user');
        if (userAsString) {
            const userData = JSON.parse(userAsString);
            setUser(userData)
        }
        setValidation(true);
    }, []);

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        validation,
        userId: user?._id,
        user: user,
        userEmail: user?.email,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );

};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};


