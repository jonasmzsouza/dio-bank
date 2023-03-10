import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppContext } from "./components/AppContext";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/account/:id"
        element={isLoggedIn ? <Account /> : <Navigate to="/" replace />}
      />
      <Route
        path="/profile/:id"
        element={isLoggedIn ? <Profile /> : <Navigate to="/" replace />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default MainRoutes;
