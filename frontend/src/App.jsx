import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {useSelector , useDispatch } from 'react-redux';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import { getUser } from './store/api/UserApi';
export default function App() {
  const dispacth = useDispatch();
  useEffect(() => {
      document.title = "Login";
      dispacth(getUser());
  },[]);
  // Shared Routes
  const Landing = lazy(() => import('./pages/Landing'));
  const SignUp = lazy(() => import('./pages/SignUp'));
  const Quiz = lazy(() => import('./pages/Quiz'));
  const user = useSelector((s) => s.auth.user);
  return (
    <Suspense fallback={<>Loading ...</>} >
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes redirect={user ? user.role : '/'} user={!user} />}>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* User Routes */}
          <Route element={<ProtectedRoutes user={user} redirect={'/'} requiredRoles={['user']} />} >
            <Route path='/user' element={<>User's Route</>} />
          </Route>
          {/* Admin Routes */}
          <Route element={<ProtectedRoutes user={user} redirect={'/'} requiredRoles={['admin']} />} >
            <Route path='/user' element={<>Admin's Route</>} />
          </Route>

          {/* Quiz Routes */}
          <Route path='/quiz/:id' element={<Quiz/>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
