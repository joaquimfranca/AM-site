import "./Home.css";
import Albuns from "./albums/albums";
import thecar from "./thecarimg.jpg";
import thumb1 from "./thumb1.png";
import thumb2 from "./thumb2.png";
import thumb3 from "./thumb3.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <p className="titlearcticfont">The Car</p>
      <p className="titlearcticfont2">New Album available now</p>
      <div className="thecar">
        <img src={thecar}></img>
        <a
          className="buttoncar"
          target="blank"
          rel="external"
          href={`https://www.amazon.com/Car-Arctic-Monkeys/dp/B0BBH73H1X`}
        >
          Buy
        </a>
      </div>
      
      <Albuns/>
      <p className="titlearcticfont">Videos</p>
      <div className="videohome_container">
     
        <div className="thumb">
        <a
          target="blank"
          rel="external"
          href={`https://www.youtube.com/watch?v=6zgEObNc_-k`}>
          <img src={thumb1}></img>
        </a>
        <a
          target="blank"
          rel="external"
          href={`https://www.youtube.com/watch?v=KQsrIxyoJdE`}>
          <img src={thumb2}></img>
        </a>
        <a
          target="blank"
          rel="external"
          href={`https://www.youtube.com/watch?v=FY5CAz6S9kE`}>
          <img src={thumb3}></img>
        </a>
        </div>
        <Link to="videos">
          <button className="buttoncarvideos">watch more videos</button>
          </Link>
</div>
    </>
  );
}
