import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/signin" />; // Redirect to login if not authenticated
  }

  return children; // Render the children (protected component) if authenticated
};

export default ProtectedRoute;
