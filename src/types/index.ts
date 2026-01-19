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


export interface Division {
  name: string
  slug: string
  description: string
  createdAt: CreatedAt
  updatedAt: UpdatedAt
  __v: number
}

export interface CreatedAt {
  $date: string
}

export interface UpdatedAt {
  $date: string
}
