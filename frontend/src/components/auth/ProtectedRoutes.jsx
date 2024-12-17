// import { Navigate, Outlet, useLocation } from "react-router-dom";

// export default function ProtectedRoute({ redirect = "/", user, requiredRole, userRole }) {
//     const location = useLocation();
    
//     const redirectLocation = location.pathname === '/' || location.pathname === "" ? redirect : location.pathname;

//     if (user && requiredRole === userRole) {
//         return <Outlet />;
//     } else {
//         return <Navigate to={redirectLocation} />;
//     }
// }