import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import GlobalStyle from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.min.css";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="admin/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
