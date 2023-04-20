import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Components/Layout/Layout";
import "./index.scss";
import CustomCursor from "./Components/CustomCursor/CustomCursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CustomCursor />
    <Layout />
  </React.StrictMode>
);
