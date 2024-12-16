import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ redirect = "/", user, requiredRole, userRole }) {
  if (!user) {
    // If the user is not logged in, redirect to the specified redirect path (login).
    return <Navigate to={redirect} />;
  }

  if (requiredRole && userRole !== requiredRole) {
    // If the user is logged in but their role doesn't match the required role, redirect.
    return <Navigate to={redirect} />;
  }

  // If all conditions are met, render the requested route.
  return <Outlet />;
}
