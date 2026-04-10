import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import Router from "./router";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="p-5 sm:p-20">
        <div className="text-sm">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  </StrictMode>
);
