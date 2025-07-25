import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../components/common/Header";

export const PrivateRoutes = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return !isAuthenticated ? (
    <div className="flex flex-col min-h-screen">
    <Header/>
    {children}
    </div>
  ) : (
    <Navigate to="/NurseryShopping/" />
  );
};
export default PrivateRoutes;
// This component checks if the user is authenticated before allowing access to private routes.
// If not authenticated, it redirects to the plants collection page.
