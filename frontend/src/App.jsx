import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './components/auth/ProtectedRoutes';
export default function App() {

  // Shared Routes
  const Landing = lazy(() => import('./pages/Landing'));
  const SignUp = lazy(() => import('./pages/SignUp'));
  const Quiz = lazy(() => import('./pages/Quiz'));
  const user = false;
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
