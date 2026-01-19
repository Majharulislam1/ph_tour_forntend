import { useUserInfoQuery } from "@/Redux/features/auth/auth.api";
import type { T_ROLE_Type } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";



 



export const withAuth = (Component: ComponentType, requiredRole?: T_ROLE_Type) => {
  return function AuthWrapper() {
    const { data, isLoading } = useUserInfoQuery(undefined);

    if (!isLoading && !data?.data?.email) {
      return <Navigate to="/login" />;
    }

    if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
      return <Navigate to="/unauthorized" />;
    }

    return <Component />;
  };
};