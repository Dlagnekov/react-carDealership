import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../contexts/AuthContext";

export const RouteGuard = ({
    children,
}) => {
    const { user } = useAuthContext();

    if (!user) {
        return <Navigate to='/login' />
    }

    return children ? children : <Outlet />
};