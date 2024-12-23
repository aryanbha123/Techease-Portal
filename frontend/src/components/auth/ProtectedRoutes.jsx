import React, { useEffect } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from '../../store/store';

const ProtectedRoute = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        dispatch(setLocation(location.pathname));
    }, [dispatch, location.pathname]);

    return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

export const UserRoute = () => {
    const user = useSelector((state) => state.auth.user);
    const location = useSelector((state) => state.location.location);

    if (!user) {
        return <Outlet/>;
    }

    if (user.role === 'admin') {
        return location?.includes('admin') ? (
            <Navigate to={location} replace />
        ) : (
            <Navigate to="/admin" replace />
        );
    } else if (user.role === 'user') {
        return location?.includes('user') ? (
            <Navigate to={location} replace />
        ) : (
            <Navigate to="/user" replace />
        );
    }

    return <Outlet/>;
};