import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../services/store";

const UnProtectedRoutes = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default UnProtectedRoutes;
