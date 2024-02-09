import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import MainPage from "./components/MainPage/MainPage.js";
import Services from "./components/Services/Services.js";
import CollegeAcceptances from "./components/CollegeAcceptances/CollegeAcceptances.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import NotFound from './components/NotFound/NotFound.js'; // Import the NotFound component


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Home" element={<MainPage />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/College-Acceptances" element={<CollegeAcceptances />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}

  </Routes>
      </div>
    </Router>
  );
}

export default App;