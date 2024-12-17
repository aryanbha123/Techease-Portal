import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from './store/api/UserApi';
import { CircularProgress } from '@mui/material';
import { red } from '@mui/material/colors';

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    document.title = "Login";
    dispatch(getUser());
  }, [dispatch]);

  // Shared Pages
  const Landing = lazy(() => import('./pages/Landing'));
  const SignUp = lazy(() => import('./pages/SignUp'));
  const Quiz = lazy(() => import('./pages/Quiz'));

  // User Pages
  const UserDashboard = lazy(() => import('./pages/client/Dashboard'));
  const Home = lazy(() => import('./pages/client/Home'));

  // Admin Pages
  const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
  const AdminQuiz = lazy(() => import('./pages/admin/Quiz'));

  return (
    <Suspense
      fallback={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress size={50} />
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes user={user}  requiredRole={null} />}>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* User Routes */}
          <Route element={<ProtectedRoutes user={user} requiredRole="user" />}>
            <Route path="/user" element={<UserDashboard><Home /></UserDashboard>} />
            <Route path="/user/quiz" element={<UserDashboard><Home /></UserDashboard>} />
            <Route path="/user/course" element={<UserDashboard><Home /></UserDashboard>} />
            <Route path="/user/settings" element={<UserDashboard><Home /></UserDashboard>} />
            <Route path="/user/profile" element={<UserDashboard><Home /></UserDashboard>} />
            <Route path="/user/results" element={<UserDashboard><Home /></UserDashboard>} />
            <Route path="/user/purchases" element={<UserDashboard><Home /></UserDashboard>} />
          </Route>

          {/* Admin Routes */}
          {/* <Route element={<ProtectedRoutes user={user} requiredRole="admin" />}> */}
            <Route path="/admin" element={<AdminDashboard>Home</AdminDashboard>} />
            <Route path="/admin/manage/course" element={<AdminDashboard>Manage Courses</AdminDashboard>} />
            <Route path="/admin/manage/users" element={<AdminDashboard>Manage Users</AdminDashboard>} />
            <Route path="/admin/manage/quiz" element={<AdminDashboard><AdminQuiz /></AdminDashboard>} />
            <Route path="/admin/manage/quiz/:id" element={<AdminDashboard><AdminQuiz /></AdminDashboard>} />
            <Route path="/admin/manage/results" element={<AdminDashboard>Manage Results</AdminDashboard>} />
            <Route path="/admin/settings" element={<AdminDashboard>Settings</AdminDashboard>} />
          {/* </Route> */}

          {/* Quiz Routes */}
          <Route path="/quiz/:id" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

// Protected Routes Component
function ProtectedRoutes({ user, requiredRole }) {
  const location = useLocation();
  const redirect = user ? (location.pathname !== '/' && location.pathname !== '' ? location.pathname : "/" +user.role) : '/';
  // If the user is authenticated and has the required role, render the children, otherwise redirect.
  if ((user && (user.role === requiredRole)) || (!user && ( null == requiredRole)) ) {
    console.log(redirect);
    return <Outlet />;
  } else {
    return <Navigate to={redirect} />;
  }
}
