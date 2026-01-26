import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";

import Login from "@/Pages/Authentication/Login";
import Registration from "@/Pages/Authentication/Registration";
import verify from "@/Pages/Authentication/verify";
import HomePage from "@/Pages/HomePage";

import { generateRoutes } from "@/utils/getRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSideBarItems";
import { userSidebarItems } from "./userSideBarItems";
import Unauthorized from "@/Pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { T_ROLE } from "@/constants/role";
import type { T_ROLE_Type } from "@/types";
import Tours from "@/Pages/Tours";
import TourDetails from "@/Pages/TourDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: '/',
        Component: HomePage
      },

      {
    Component: Tours,
    path: "tours",
  },
  {
    Component: TourDetails,
    path: "tours/:id",
  },

    ]
  },

  

  {
    Component: withAuth(DashboardLayout, T_ROLE.superAdmin as T_ROLE_Type),
    path: '/admin',
    children: [
      { index: true, element: <Navigate to="/admin/analytics" /> },
      ...generateRoutes(adminSidebarItems)
    ]
  },

  {
    path: '/user',
    Component: DashboardLayout,
    children: [
      { index: true, element: <Navigate to="/user/booking" /> },
      ...generateRoutes(userSidebarItems)
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
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
]);


export default router;

