import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import GlobalStyle from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="admin/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
