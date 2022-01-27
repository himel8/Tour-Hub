import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import BlogPage from "./Pages/BlogPage/BlogPage";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Plans from "./Pages/Plans/Plans";
import Register from "./Pages/Register/Register";
import ReviewPage from "./Pages/ReviewPage/ReviewPage";
import SingleTourPage from "./Pages/SingleTourPage/SingleTourPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/blog" element={<BlogPage />} />

          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/tour/:planId"
            element={
              <PrivateRoute>
                <SingleTourPage />
              </PrivateRoute>
            }
          />

          <Route path="/review" element={<ReviewPage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
