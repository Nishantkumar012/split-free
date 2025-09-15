import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  user: any;
  children: ReactNode;
}


//only user who are loggined are authorized to pages like dashboard

const ProtectedRoute = ({ user, children }: ProtectedRouteProps) => {
  if (!user) {
    // User not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  // User logged in → render the page eg: children can be dashboar or any page
  return <>{children}</>;
};

export default ProtectedRoute;
