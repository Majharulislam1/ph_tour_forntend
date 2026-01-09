import type { ComponentType } from "react";

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}


export type T_ROLE_Type = "SUPER_ADMIN" | "ADMIN" | "USER";