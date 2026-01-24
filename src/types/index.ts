import type { ComponentType } from "react";
import type { ZodIssue } from "zod/v3";

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


export interface Division_single {
  _id: string
  name: string
  thumbnail: string
  description?: string
}

type ErrorSource = {
  path: string;
  message: string;
};



export interface IErrorResponse {
  success: boolean;
  message: string;
  errorSources?: ErrorSource[];
  err?: {
    issues: ZodIssue[];
    name: string;
  };
  stack?: string;
}