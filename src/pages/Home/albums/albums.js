import { Link } from "react-router-dom";
import capa1 from "./capa1.jpg";
import capa2 from "./capa2.jpg";
import capa3 from "./capa3.jpg";
import capa4 from "./capa4.jpg";
import capa5 from "./capa5.jpg";
import capa6 from "./capa6.jpg";
import "./albuns.css";

export default function Albuns() {
    return (
      <div className="albuns-grid-container">
        <div className="albuns-header">Albuns</div>
        <div className="album-container">
          <Link className="album-link" to="/whatever-people-say-i-am-thats-what-i-am-not-album">
            <span className="album-title1">Whatever People Say I Am, That's What I'm Not</span>
            <img className="album-cover" src={capa1} alt="Album cover"></img>
          </Link>
          <Link className="album-link" to="/favorite-worst-nightmare-album">
            <span className="album-title">Favorite Worst Nightmare</span>
            <img className="album-cover" src={capa2} alt="Album cover"></img>
          </Link>
          <Link className="album-link" to="/humbug-album">
            <span className="album-title">Humbug</span>
            <img className="album-cover" src={capa3} alt="Album cover"></img>
          </Link>
          <Link className="album-link" to="/suck-it-and-see-album">
            <span className="album-title">Suck It And See</span>
            <img className="album-cover" src={capa4} alt="Album cover"></img>
          </Link>
          <Link className="album-link" to="/am-album">
            <span className="album-title">AM</span>
            <img className="album-cover" src={capa5} alt="Album cover"></img>
          </Link>
          <Link className="album-link" to="/tranquility-base-hotel-and-casino-album">
            <span className="album-title">Tranquility Base Hotel And Casino</span>
            <img className="album-cover" src={capa6} alt="Album cover"></img>
          </Link>
        </div>
      </div>
    );
  }
  
