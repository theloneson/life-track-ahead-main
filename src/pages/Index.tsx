
import { Navigate } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import LoginPage from "../components/auth/LoginPage";

const Index = () => {
  const isLoggedIn = false; // This would normally come from an auth context or similar

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return <Dashboard />;
};

export default Index;
