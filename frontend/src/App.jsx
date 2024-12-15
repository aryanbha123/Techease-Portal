import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import { getUser } from './store/api/UserApi';
import { CircularProgress } from '@mui/material';
export default function App() {
  const dispacth = useDispatch();
  useEffect(() => {
    document.title = "Login";
    dispacth(getUser());
  }, []);
  // Shared Routes
  const Landing = lazy(() => import('./pages/Landing'));
  const SignUp = lazy(() => import('./pages/SignUp'));
  const Quiz = lazy(() => import('./pages/Quiz'));
  const user = useSelector((s) => s.auth.user);

  // user components
  const UserDashBoard = lazy(() => import('./pages/client/Dashboard'));
  const Home = lazy(() => import('./pages/client/Home'));
  return (
    <Suspense fallback={<><CircularProgress/></>} >
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes redirect={user ? user.role : '/'} user={!user} />}>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* User Routes */}
          <Route element={<ProtectedRoutes user={user} redirect={'/'} requiredRoles={['user']} />} >
            <Route path='/user' element={<UserDashBoard WrapperComponent={<Home/>} />} />
            <Route path='/user/quiz' element={<UserDashBoard WrapperComponent={<Home/>} />} />
            <Route path='/user/course' element={<UserDashBoard WrapperComponent={<Home/>} />} />
            <Route path='/user/settings' element={<UserDashBoard WrapperComponent={<Home/>} />} />
            <Route path='/user/profile' element={<UserDashBoard WrapperComponent={<Home/>} />} />
            <Route path='/user/results' element={<UserDashBoard WrapperComponent={<Home/>} />} />
            <Route path='/user/purchases' element={<UserDashBoard WrapperComponent={<Home/>} />} />
          </Route>
          {/* Admin Routes */}
          <Route element={<ProtectedRoutes user={user} redirect={'/'} requiredRoles={['admin']} />} >
            <Route path='/admin' element={<>Admin's Route</>} />
          </Route>

          {/* Quiz Routes */}
          <Route path='/quiz/:id' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
