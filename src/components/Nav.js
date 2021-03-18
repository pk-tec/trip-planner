import React from "react";
import { Link } from "react-router-dom";
import "./styles/Nav.css";
const Nav = () => (
	<nav className="nav">
		<div className="nav-item">
			<Link to="/" className="nav-links">
				Home
			</Link>
		</div>
		<div className="nav-item">
			<Link to="/add" className="nav-links">
				Add Day
			</Link>
		</div>
		<div className="nav-item">
			<Link to="/list" className="nav-links">
				List of days
			</Link>
		</div>
	</nav>
);
export default Nav;
