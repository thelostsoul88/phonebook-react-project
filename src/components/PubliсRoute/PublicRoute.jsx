import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../hooks/useAuth";

export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const { state } = useLocation();

  return !isLoggedIn ? children : <Navigate to={state ? state : "/contacts"} />;
};
