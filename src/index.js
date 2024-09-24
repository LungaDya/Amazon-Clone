import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ShoppingState } from "./context/shopping/ShoppingState";

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <BrowserRouter>
     
      <ShoppingState>
        <App />
      </ShoppingState>
    
  </BrowserRouter>
);

