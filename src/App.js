import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Pages/Landing/Home";
import Stats from "./Components/Pages/Stats/Stats";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Stats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
