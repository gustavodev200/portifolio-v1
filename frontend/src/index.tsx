import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AllRoutes from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AllRoutes />
    <App />
  </React.StrictMode>
);
