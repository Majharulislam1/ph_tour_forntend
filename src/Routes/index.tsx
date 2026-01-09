import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
 
import Login from "@/Pages/Authentication/Login";
import Registration from "@/Pages/Authentication/Registration";
import verify from "@/Pages/Authentication/verify";
import HomePage from "@/Pages/HomePage";
 
import { generateRoutes } from "@/utils/getRoutes";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSideBarItems";
import { userSidebarItems } from "./userSideBarItems";

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
     path:'/admin',
     Component:DashboardLayout,
     children:[
          ...generateRoutes(adminSidebarItems)
     ]
  },

  {
      path:'/user',
      Component:DashboardLayout,
      children:[
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
  }
]);


export default router;