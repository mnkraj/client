import logo from "./logo.svg";
import "./App.css";
import Add_agent from "./pages/Add_agent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/add_agent" element={<Add_agent />} />
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
