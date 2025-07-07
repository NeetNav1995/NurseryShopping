import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
//import { store } from "./redux/store";
import "./assets/css/style.scss";
import LandingPage from "./components/LandingPage";
import EntryPage from "./components/EntryPage";

createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
    <LandingPage />
  // </Provider>
);
