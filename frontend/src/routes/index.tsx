import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Home from "../pages/Home";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
