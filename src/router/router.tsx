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
import CreateComp from "@/pages/create-comp/create-comp";
import MyComps from "@/pages/my-comps/my-comps";
import Comp from "@/pages/comp/comp";

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
        path: "/create-comp",
        element: <CreateComp />,
      },
      {
        path: "/my-comps",
        element: <MyComps />,
      },
      {
        path: "/comps/:id",
        element: <Comp />,
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
