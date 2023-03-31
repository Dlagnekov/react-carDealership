import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {

    const [auth, setAuth] = useState({});
    const [user, setUser] = useState('');

    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);
            navigate('/catalog');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onLoginSubmit = async (data) => {
        try {
            console.log('hey');
            const result = await authService.login(data);
            console.log('hi');
            setAuth(result);
            localStorage.setItem('auth', result.accessToken);
            setUser(localStorage.getItem('auth'));

            navigate('/catalog');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onLogout = async () => {
        await authService.logout();
        setAuth({});
        setUser('');
        localStorage.clear();
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
        isLogged: user,
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


