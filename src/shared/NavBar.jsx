import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import { Link } from "react-router-dom";
import Usuario from "../Inicio/Usuario";
import logo_cratos from "../Main/img/logo_cratos.svg";
import { AddLog } from "../shared/AddLog";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const history = useNavigate();

  function cerrarSesion() {
    AddLog(localStorage.getItem("usuario"), "Log out");
    localStorage.setItem("usuario", "");
    history("/");
    window.location.reload();
  }

  return (
    <nav>
      <div className="NavBarContainer">
        <Link to={"/"} className="logo">
          <img src={logo_cratos} alt="Logo de la empresa" />
        </Link>
        <div className="navLinksContainer">
          <Link to={"/Login"} className="linkLogin">
            Log In
          </Link>
          <span>|</span>
          <span className="linkCerrarSesion" onClick={cerrarSesion}>
            Log out
          </span>
          <span>|</span>
          <Link to={"/Register"} className="linkLogin">
            Register
          </Link>
          <span>|</span>
          <Link to={"/Carro"} className="linkLogin">
            Carro
          </Link>
          <span>|</span>
          <span className="linkCerrarSesion">
            User<Usuario></Usuario>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
