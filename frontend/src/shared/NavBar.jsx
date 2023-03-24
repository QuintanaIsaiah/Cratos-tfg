import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import {Link} from "react-router-dom";


const NavBar = () => {


  return (
    <div className="NavBarContainer">
      <span>CRATOS</span>
      <Link to={"/Login"} className="linkLogin">Log In</Link>
    </div>
  );
};

export default NavBar;
