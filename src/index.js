import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Viewdata from "./pages/Viewdata";
import Navbar from "./components/Navbar";
import Add_agent from "./pages/Add_buyer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Router>
        <div>
        <App />
          <Routes>
          <Route
              exact
              path="/view_buyer"
              element={<Viewdata table={"buyer"} />}
            />
            <Route
              exact
              path="/view_seller"
              element={<Viewdata table={"seller"} />}
            />
            <Route
              exact
              path="/view_agent"
              element={<Viewdata table={"agent"} />}
            />
            <Route
              exact
              path="/add_buyer"
              element={<Add_agent table={"buyer"} />}
            />
            <Route
              exact
              path="/add_seller"
              element={<Add_agent table={"seller"} />}
            />
            <Route
              exact
              path="/add_agent"
              element={<Add_agent table={"agent"} />}
            />
          </Routes>
        </div>
      </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
