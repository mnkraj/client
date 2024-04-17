import logo from "./logo.svg";
import "./App.css";
import Add_agent from "./pages/Add_buyer";

import Navbar from "./components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Viewdata from "./pages/Viewdata";
function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Navbar />
      <Router>
        <div>
          <Routes>
          <Route
              exact
              path="/"
              element={<Viewdata table={"buyer"} />}
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
    </>
  );
}

export default App;
