import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let accessToken = window.sessionStorage.getItem("token");
  if (accessToken === "111") {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
