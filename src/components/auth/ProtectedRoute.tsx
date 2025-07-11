
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Check if user is logged in
  // In a real app, this would use a proper auth system
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // If authenticated, render children routes
  return <Outlet />;
};

export default ProtectedRoute;
