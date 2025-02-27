import { NavLink } from "react-router-dom";
import { Button2 } from "../button/Button";
import { useState } from "react";

const NavBar = () => {
  const [navMenu, setNavMenu] = useState();

  const showMenuHandler = () => {
    setNavMenu(
      <div className="navmenu mobscrin">
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        <NavLink to="/about" className="navlink">
          About
        </NavLink>
        <NavLink to="/projects" className="navlink">
          Projects
        </NavLink>

        <NavLink to="/experience" className="navlink">
          Experience
        </NavLink>

        <NavLink to="/contact" className="navlink">
          Contact
        </NavLink>
      </div>
    );
    document.getElementById("showMenu").style.display = "none";
    document.getElementById("hideMenu").style.display = "block";
  };

  const hideMenuHandler = () => {
    setNavMenu();
    document.getElementById("showMenu").style.display = "block";
    document.getElementById("hideMenu").style.display = "none";
  };

  return (
    <div className="navbar">
      <div>
        <h1>
          <NavLink to="/" className="logo">
            Solam
          </NavLink>
        </h1>
      </div>

      <div className="deskscrin">
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        <NavLink to="/about" className="navlink">
          About
        </NavLink>
        <NavLink to="/projects" className="navlink">
          Projects
        </NavLink>

        <NavLink to="/experience" className="navlink">
          Experience
        </NavLink>

        <NavLink to="/contact" className="navlink">
          Contact
        </NavLink>
      </div>

      <div className="deskscrin">
        <Button2 resume="Resume" />
      </div>

      <div className="mobmenu mobscrin">
        <button onClick={showMenuHandler} id="showMenu">
          <i className="fa fa-bars"></i>
        </button>

        <button
          style={{ display: "none" }}
          onClick={hideMenuHandler}
          id="hideMenu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div>{navMenu}</div>
      </div>
    </div>
  );
};

export default NavBar;
