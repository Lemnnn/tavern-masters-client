import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Landing from "../pages/landing/landing";
import Login from "../pages/auth/login/login";
import Register from "../pages/auth/register/register";
import Home from "../pages/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <Navigate to="/home" replace={true} />,
  },
]);

export default function WebRouter() {
  return <RouterProvider router={router} />;
}
