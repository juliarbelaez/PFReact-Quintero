import logo from "./assets/logo.png";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div class="overlay"></div>

      <div class="utility-nav">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <p class="small">
                <i class="bx bx-envelope"></i> info@carmesi.co |{" "}
                <i class="bx bx-phone"></i> +57 3116030381
              </p>
            </div>

            <div class="col-12 col-md-6">
              <p class="small">
                Envío gratis por compras superiores a $200.000
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar">
        <div class="left">
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
        </div>

        <div class="right">
          <ul class="list">
            <li></li>

            <li>
              <a href="/category/jarras">Jarras</a>
            </li>

            <li>
              <a href="/category/azucareras">Azucareras</a>
            </li>
            <li>
              <a href="/category/vajillas">Vajillas</a>
            </li>
            <li>
              <a href="/category/teteras">Teteras</a>
            </li>
            <li>
              <a href="/category/te">Juegos de té</a>
            </li>
            <li className="nav-item ml-auto">
              <CartWidget />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
