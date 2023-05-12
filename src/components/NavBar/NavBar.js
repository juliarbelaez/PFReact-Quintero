import logo from "./assets/logo.png";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul className="navbar-nav mr-auto">
        <li>
          <Link to="/">
            <img
              className="logo"
              src={logo}
              alt="Carrito de Compras"
              width={150}
              height={150}
            />
          </Link>
        </li>
        <li className="nav-item">
          <NavLink
            to={`/category/azucareras`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            <button className="btn btn btn-light" type="button">
              Azucareras
            </button>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={`/category/jarras`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            <button className="btn btn btn-light" type="button">
              Jarras
            </button>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={`/category/te`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            <button className="btn btn btn-light" type="button">
              Juegos de té
            </button>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={`/category/teteras`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            <button className="btn btn btn-light" type="button">
              Teteras
            </button>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={`/category/vajillas`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            <button className="btn btn btn-light" type="button">
              Vajillas
            </button>
          </NavLink>
        </li>

        <li className="nav-item ml-auto">
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
