import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import EntryPage from "../components/EntryPage";
import ShoppingCart from "../components/ShoppingCart";
import PrivateRoutes from "./PrivateRoutes";

export const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Define your public routes here */}
        <Route path="/NurseryShopping/" element={<LandingPage />} />
        <Route
          path="/NurseryShopping/plantsCollection"
          element={<EntryPage />}
        />
        {/* Define private routes that require authentication */}
        <Route
          path="/NurseryShopping/checkout"
          element={
            <PrivateRoutes>
              <ShoppingCart />
            </PrivateRoutes>
          }
        />
        {/* Redirect to LandingPage for any unmatched routes */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};
