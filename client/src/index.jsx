// Bring React in to build a component.
import React from "react";
import App from './app.jsx';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

root.render(<App />);