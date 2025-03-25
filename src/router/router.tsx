import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Landing from "../pages/landing/landing";
import Login from "../pages/auth/login/login";
import Register from "../pages/auth/register/register";
import Home from "../pages/home/home";
import AuthenticatedContextProvider from "../context/authenticated-context";
import AppLayout from "../components/layout/app-layout";
import LikedComps from "@/pages/liked-comps/liked-comps";
import Cards from "@/pages/cards/cards";
import CreateComp from "@/pages/create-comp/create-comp";

const router = createBrowserRouter([
  {
    element: (
      <AuthenticatedContextProvider>
        <AppLayout />
      </AuthenticatedContextProvider>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/liked-comps",
        element: <LikedComps />,
      },
      {
        path: "/bg-cards",
        element: <Cards />,
      },
      {
        path: "/create-comp",
        element: <CreateComp />,
      },
    ],
  },
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
    path: "*",
    element: <Navigate to="/home" replace={true} />,
  },
]);

export default function WebRouter() {
  return <RouterProvider router={router} />;
}
