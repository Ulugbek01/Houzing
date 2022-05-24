import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
// import "antd/dist/antd.css";
import "./index.css";
// import { Filter } from "./components/Filter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
    {/* <Filter /> */}
  </React.StrictMode>
);
