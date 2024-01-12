import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import MainPage from "./components/MainPage/MainPage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Main-Page" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;