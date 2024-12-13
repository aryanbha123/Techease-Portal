import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ redirect = "/", user, requiredRoles = [] }) {

    if (!user) {
        return <Navigate to={redirect} />;
    }

    if (requiredRoles.length > 0 && !requiredRoles.includes(user.role)) {
        return <Navigate to={redirect} />;
    }

    return <Outlet />;
}
