import React from "react";
import Login from "./pages/login.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;