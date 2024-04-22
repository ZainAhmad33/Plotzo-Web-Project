import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Plotzo</span>
        </a>
        <Link to="/">Home</Link>
        <Link to="aboutus">About</Link>
        <Link to="listings">Listings</Link>
        <Link to="contact">Contact</Link>
      </div>
      <div className="right">

            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="aboutus">About</Link>
          <Link to="listings">Listings</Link>
          <Link to="contact">Contact</Link>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
