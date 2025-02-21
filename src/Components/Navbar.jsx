import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        {/* Restaurant name aligned to the left */}
        <NavLink className="navbar-title" to="/">
          Essenza
        </NavLink>

        {/* Hamburger menu in mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation menu */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/"}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"sobrenosotros"}>
                Sobre Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"contacto"}>
                Contacto
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link " to={"login"}>
                Pedir Ahora
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
