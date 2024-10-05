import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Connect React to Redux and inject the store*/}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
