import { Navigate, Outlet } from "react-router-dom";

export const RouteGuard = ({
    children,
}) => {

    let loggedUser = false;

    if (localStorage.getItem('user')) {
        loggedUser = true;
    }

    if (!loggedUser) {
        return <Navigate to='/login' />
    }

    return children ? children : <Outlet />

};