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

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ITourPackage {
  _id: string;
  title: string;
  slug: string;
  startDate: string;
  endDate: string;
  arrivalLocation: string;
  departureLocation: string;
  location: string;
  description: string;
  costFrom: number;
  maxGuest: number;
  minAge: number;
  division: string;
  tourType: string;
  amenities: string[];
  included: string[];
  excluded: string[];
  tourPlan: string[];
  images: string[];
  createdAt: string;
  updatedAt: string;
}