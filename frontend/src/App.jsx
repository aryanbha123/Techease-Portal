import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from './store/api/UserApi';
import { CircularProgress } from '@mui/material';
import ProtectedRoute, { UserRoute } from './components/auth/ProtectedRoutes';
import LoadingModal from './components/modals/LoadingModal';

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    document.title = "Login";
    dispatch(getUser());
  }, [dispatch]);

  // Lazy-loaded pages
  const Landing = lazy(() => import('./pages/Landing'));
  const SignUp = lazy(() => import('./pages/SignUp'));
  const Quiz = lazy(() => import('./pages/Quiz'));

  const UserDashboard = lazy(() => import('./pages/client/Dashboard'));
  const Home = lazy(() => import('./pages/client/Home'));

  const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
  const AdminQuiz = lazy(() => import('./pages/admin/Quiz'));
  const EditQuiz = lazy(() => import('./pages/admin/EditQuiz'));

  return (
    <Suspense fallback={<div className="loading-overlay"><LoadingModal /></div>}>
      <BrowserRouter>
        <Routes>
          {/* Routes for guest users */}
          <Route element={<UserRoute/>}>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* User Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/user" element={<UserDashboard><Home /></UserDashboard>} />
            <Route path="/user/quiz" element={<UserDashboard><Home /></UserDashboard>} />
            <Route path="/user/course" element={<UserDashboard><Home /></UserDashboard>} />
            <Route path="/user/settings" element={<UserDashboard><Home /></UserDashboard>} />
            <Route path="/user/profile" element={<UserDashboard><Home /></UserDashboard>} />
            <Route path="/user/results" element={<UserDashboard><Home /></UserDashboard>} />
            <Route path="/user/purchases" element={<UserDashboard><Home /></UserDashboard>} />
          </Route>

          {/* Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminDashboard>Home</AdminDashboard>} />
            <Route path="/admin/manage/quiz/" element={<AdminDashboard><AdminQuiz /></AdminDashboard>} />
            <Route path="/admin/manage/quiz/:id" element={<AdminDashboard><EditQuiz /></AdminDashboard>} />
            <Route path="/admin/manage/results" element={<AdminDashboard>Manage Results</AdminDashboard>} />
            <Route path="/admin/settings" element={<AdminDashboard>Settings</AdminDashboard>} />
          </Route>

          {/* Quiz Routes */}
          <Route path="/quiz/:id" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}


