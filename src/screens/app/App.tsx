// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "../Login/Login";
import { Level } from "../level/Level";
import { NavBar } from "../../components/NavBar";
import { HomeContainer } from "../home/HomeContainer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="MainContent">
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/level" element={<Level />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
