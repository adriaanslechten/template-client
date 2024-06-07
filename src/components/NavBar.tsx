// src/components/NavBar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar: React.FC = () => {
  return (
    <nav className="Sidebar">
      <ul>
        <li>
          <Link className="NavLink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="NavLink" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="NavLink" to="/level">
            Level
          </Link>
        </li>
      </ul>
    </nav>
  );
};
