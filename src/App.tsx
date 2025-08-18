import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";

const Dashboard = lazy(() => import("./pages/dashboard"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
