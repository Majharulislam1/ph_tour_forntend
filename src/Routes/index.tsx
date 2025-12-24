import App from "@/App";
import Login from "@/Pages/Authentication/Login";
import Registration from "@/Pages/Authentication/Registration";
import verify from "@/Pages/Authentication/verify";
import HomePage from "@/Pages/HomePage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: '/',
        Component: HomePage
      }
    ]
  },

  {
    path: '/register',
    Component: Registration
  },
  {
    path: '/login',
    Component: Login

  },
  {
    path: "/verify",
    Component: verify
  }
]);


export default router;