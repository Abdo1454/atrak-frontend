import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, adminOnly = false }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly) {
    if (
      user.role !== "admin" &&
      user.is_admin !== true &&
      user.is_admin !== 1
    ) {
      return <Navigate to="/dashboard" replace />;
    }
  } else {
    if (
      user.role === "admin" ||
      user.is_admin === true ||
      user.is_admin === 1
    ) {
      return <Navigate to="/admin" replace />;
    }
  }

  return children;
}

export default ProtectedRoute;