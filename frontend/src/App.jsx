import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoutes";
import { getUser } from "./store/api/UserApi";
import { CircularProgress } from "@mui/material";

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    document.title = "Login";
    dispatch(getUser());
  }, [dispatch]);

  // Lazy-loaded pages
  const Landing = lazy(() => import("./pages/Landing"));
  const SignUp = lazy(() => import("./pages/SignUp"));
  const Quiz = lazy(() => import("./pages/Quiz"));
  const UserDashboard = lazy(() => import("./pages/client/Dashboard"));
  const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
  const AdminQuiz = lazy(() => import("./pages/admin/Quiz"));

  return (
    <Suspense
      fallback={
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <CircularProgress size={50} />
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              user ? <Navigate to={`/${user.role}`} /> : <Landing />
            }
          />
          <Route path="/signup" element={<SignUp />} />

          {/* User Routes */}
          <Route
            element={<ProtectedRoute user={!!user} requiredRole="user" userRole={user?.role} redirect="/" />}
          >
            <Route path="/user" element={<UserDashboard />} />
          </Route>

          {/* Admin Routes */}
          <Route
            element={<ProtectedRoute user={!!user} requiredRole="admin" userRole={user?.role} redirect="/" />}
          >
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/manage/quiz" element={<AdminDashboard><AdminQuiz /></AdminDashboard>} />
          </Route>

          {/* Quiz Routes */}
          <Route path="/quiz/:id" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
