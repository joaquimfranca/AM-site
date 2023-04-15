import "./header.css";
import { Link } from "react-router-dom";
import imagem from "../Header/logo.png";
import Sidebar from "./sidebar"

function Header() {

  return (
    <header className="header">

      <div className="routes">
        <Link className="logo" to="/">
          <img src={imagem} />
        </Link>
        <Link className="item_header" to="/theband">
          {" "}
          The Band
        </Link>
        <Link className="item_header" to="/videos">
          {" "}
          videos
        </Link>
        <Link className="item_header" to="/live">
          {" "}
          Live
        </Link>
      </div>
      <Sidebar/>
    </header>
  );
}
export default Header;
