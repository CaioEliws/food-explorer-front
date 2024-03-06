import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { AdmRoutes } from "./adm.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? (
        user.isAdmin === 1 ? <AdmRoutes /> : <AppRoutes />
      ) : (
        <AuthRoutes />
      )}
    </BrowserRouter>
  );
}