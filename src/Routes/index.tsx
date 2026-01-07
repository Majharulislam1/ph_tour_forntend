import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Analytics from "@/Pages/admin/analytics";
import Login from "@/Pages/Authentication/Login";
import Registration from "@/Pages/Authentication/Registration";
import verify from "@/Pages/Authentication/verify";
import HomePage from "@/Pages/HomePage";
import Booking from "@/Pages/user/Booking";
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
     path:'/admin',
     Component:DashboardLayout,
     children:[
         {
            path:'analytics',
            Component:Analytics
         }
     ]
  },

  {
      path:'/user',
      Component:DashboardLayout,
      children:[
         {
             path:'booking',
             Component:Booking
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