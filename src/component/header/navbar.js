import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import { faTasksAlt } from "@fortawesome/free-solid-svg-icons/faTasksAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logos">
        <FontAwesomeIcon icon={faTasksAlt} className="fa-task" />
        <div className="navbar-logo">zeroTask.</div>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
