import { Route, Routes } from "react-router";
import Home from "./pages/home";
import ProfileSelector from "./pages/profileSelector";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<login />} />
      <Route path="/profileSelector" element={<ProfileSelector />} />
    </Routes>
  );
}

export default AppRouter;
