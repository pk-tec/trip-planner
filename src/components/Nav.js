import React from "react";
import { Link } from "react-router-dom";
import "./styles/Nav.css";
const Nav = () => (
	<nav className="nav">
		<Link to="/">Home</Link>
		<Link to="/add">add Day</Link>
		<Link to="/list">list of days</Link>
	</nav>
);
export default Nav;
