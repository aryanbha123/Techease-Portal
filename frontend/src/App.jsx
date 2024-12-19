import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from './store/api/UserApi';
import ProtectedRoute, { UserRoute } from './components/auth/ProtectedRoutes';
import LoadingModal from './components/modals/LoadingModal';
import NotFound from './components/utils/NotFound';
import Hero from './components/web/Hero';
import Content from './components/web/Content';
import CollegeDropdown from './components/web/Temp';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Techease - Platform offering Everything";
    dispatch(getUser());
  }, [dispatch]);

  // Lazy-loaded pages
  const Landing = lazy(() => import('./pages/Landing'));
  const SignUp = lazy(() => import('./pages/SignUp'));
  const Quiz = lazy(() => import('./pages/Quiz'));

  // User Routes
  const UserDashboard = lazy(() => import('./pages/client/Dashboard'));
  const UserHome = lazy(() => import('./pages/client/Home'));

  // Admin Routes
  const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
  const AdminQuiz = lazy(() => import('./pages/admin/Quiz'));
  const EditQuiz = lazy(() => import('./pages/admin/EditQuiz'));

  // Website Routes
  const Layout = lazy(() => import('./components/layout/Layout'));

  return (
    <Suspense fallback={<div className="loading-overlay"><LoadingModal /></div>}>
      <BrowserRouter>
        <Routes>
          {/* Routes for guest users */}
          <Route element={<UserRoute />}>
            <Route path="/login" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* User Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/user" element={<UserDashboard><UserHome /></UserDashboard>} />
            <Route path="/user/quiz" element={<UserDashboard><UserHome /></UserDashboard>} />
            <Route path="/user/course" element={<UserDashboard><UserHome /></UserDashboard>} />
            <Route path="/user/settings" element={<UserDashboard><UserHome /></UserDashboard>} />
            <Route path="/user/profile" element={<UserDashboard><UserHome /></UserDashboard>} />
            <Route path="/user/results" element={<UserDashboard><UserHome /></UserDashboard>} />
            <Route path="/user/purchases" element={<UserDashboard><UserHome /></UserDashboard>} />
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


          {/* Main Website */}
          <Route path="/" element={<Layout>
            <Hero />
            <Content/>
            {/* <CollegeDropdown/> */}
          </Layout>} />

          <Route path='*' element={<><NotFound /></>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}


