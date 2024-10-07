import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Rotas from "./Rotas";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Rotas />
  </StrictMode>
);
