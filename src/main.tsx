import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./router";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <Router />
  </>
);
