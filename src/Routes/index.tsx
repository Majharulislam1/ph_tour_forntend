import App from "@/App";
import Registration from "@/Pages/Authentication/Registration";
import HomePage from "@/Pages/HomePage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component:App,
    children:[
         {
             path:'/',
             Component:HomePage
         }
    ]
  },

  {
     path:'/register',
     Component:Registration
  }
]);


export default router;