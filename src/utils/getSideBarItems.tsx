import { T_ROLE } from "@/constants/role";
import { adminSidebarItems } from "@/Routes/adminSideBarItems";
import { userSidebarItems } from "@/Routes/userSideBarItems";
import type { T_ROLE_Type } from "@/types";

 
 

export const getSidebarItems = (userRole: T_ROLE_Type) => {
  switch (userRole) {
    case T_ROLE.superAdmin:
      return [...adminSidebarItems];
    case T_ROLE.Admin:
      return [...adminSidebarItems];
    case T_ROLE.User:
      return [...userSidebarItems];
    default:
      return [];
  }
};

