import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Landing from "../pages/landing/landing";
import AuthLayout from "../components/layout/auth-layout";
import Login from "../pages/auth/login/login";
import Register from "../pages/auth/register/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" replace={true} />,
  },
]);

export default function WebRouter() {
  return <RouterProvider router={router} />;
}
