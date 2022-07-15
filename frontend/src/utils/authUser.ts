import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "./api";

type User = {
  email: string;
  password: string;
};

type TypeForm = {
  data: User;
  token: string;
};

export default function useAuth() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  async function login(user: User) {
    try {
      const { data, status } = await api.post("/admin", user);

      if (status === 200) {
        console.log(data);
        await authUser(data);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function authUser(data: TypeForm) {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));
    setToken(JSON.stringify(data.token));
    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    navigate("/");
  }

  return { authenticated, login, token };
}
