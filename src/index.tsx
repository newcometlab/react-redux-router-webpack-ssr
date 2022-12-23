import React from "react";
import { hydrateRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

hydrateRoot(
  document.getElementById("root") as HTMLDivElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
