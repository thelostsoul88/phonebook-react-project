import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../hooks/useAuth";

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? children : <Navigate to="/login" state={location} />;
};
