import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { UserContextProvider } from "./context/userContext";
import { BlogContextProvider } from "./context/blogContext";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <UserContextProvider>
    <BlogContextProvider>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </BlogContextProvider>
  </UserContextProvider>
);
