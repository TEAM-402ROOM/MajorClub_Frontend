import React from "react";
import ReactDOM from "react-dom/client";
import { OverlayProvider } from "@toss/use-overlay";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <OverlayProvider>
    <App />
  </OverlayProvider>
);
