// import { createRoot } from "react-dom/client";
// import "./index.css";
// import Router from "./router.jsx";

// createRoot(document.getElementById("root")).render(<Router />);


// main.js or index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional: your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
