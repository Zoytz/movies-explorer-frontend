import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = React.memo(({isLoggedIn, children}) => {
  return (
    isLoggedIn ? children : <Navigate to="/" />
  );
});

export default ProtectedRoute; 