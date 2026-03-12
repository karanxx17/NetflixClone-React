import { useEffect, useState } from "react";
import "../styles/netflix.css";

function Navbar() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${show ? "navbar-black" : ""}`}>
      
      <img
        className="navbar-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <div className="navbar-menu">
        <span>Home</span>
        <span>TV Shows</span>
        <span>Movies</span>
        <span>My List</span>
      </div>

    </div>
  );
}

export default Navbar;