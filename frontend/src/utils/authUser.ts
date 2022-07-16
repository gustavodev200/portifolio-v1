import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import api from "./api";

// type User = {
//   email: string;
//   password: string;
// };

// type TypeForm = {
//   token: string;
// };

export default function useAuth() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
      api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
        token
      )}`;
      navigate("/admin/dashboard");
    }
  }, []);

  async function login(user: any) {
    try {
      const { data, status } = await api.post("/admin", user);

      if (status === 200) {
        await authUser(data);
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      // new Error(err);
    }
  }

  async function authUser(data: any) {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));
    setToken(JSON.stringify(data.token));
    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    navigate("dashboard");
  }

  async function projectsAdd(newproject: any) {
    await api
      .post("admin/dashboard", newproject)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  return { authenticated, login, token, projectsAdd };
}
