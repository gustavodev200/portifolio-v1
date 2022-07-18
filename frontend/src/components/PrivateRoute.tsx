import { Navigate, Outlet } from "react-router-dom";
import authUser from "../utils/authUser";

const PrivateRoute = () => {
  const { authenticated } = authUser();

  return authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
