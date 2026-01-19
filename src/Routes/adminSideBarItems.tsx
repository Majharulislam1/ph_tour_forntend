import Add_Division from "@/Pages/admin/Add_Division";
import Add_Tour from "@/Pages/admin/Add_Tour";
import Add_Tour_Type from "@/Pages/admin/Add_Tour_Type";
 
import { lazy } from "react";


const Analytics = lazy(()=> import("@/Pages/admin/analytics"))

export const adminSidebarItems  = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Tour Management",
    items: [
      {
        title: "Add Tour Type",
        url: "/admin/add-tour-type",
        component: Add_Tour_Type,
      },

      {
        title: "Add Division",
        url: "/admin/add-division",
        component: Add_Division,
      },

      {
        title: "Add Tour",
        url: "/admin/add-tour",
        component: Add_Tour,
      },
      
      

    ],
  },
];