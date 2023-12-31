import { Link, NavLink } from "react-router-dom";

import avatarLink from "../../assets/avatar-icon.png";
import classes from "./Navbar.module.css";

export default function Navbar() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <Link className={classes["site-logo"]} to="/">
        #VANQUEST
      </Link>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className={classes["login-link"]}>
          <img src={avatarLink} className={classes["login-icon"]} />
        </Link>
      </nav>
    </header>
  );
}
