import "./Album1.css";
import cover1 from "./capa.jpg";
export default function Album1() {
  return (
    <>
      <h1>Whatever People Say I Am, That's What I'm Not</h1>

      <div className="container">
        <div className="cover1">
          {" "}
          <img src={cover1}></img>{" "}
        </div>

        <h2>
          Tracklist: <br />
          1. The View From The Afternoon <br />
          2. I Bet You Look Good On The Dancefloor
          <br />
          3. Fake Tales Of San Francisco
          <br />
          4. Dancing Shoes
          <br />
          5. You Probably Couldn't See For The Lights But You Were Staring
          Straight At Me
          <br />
          6. Still Take You Home
          <br />
          7. Riot Van
          <br />
          8. Red Light Indicates Doors Are Secured
          <br />
          9. Mardy Bum
          <br />
          10. Perhaps Vampires Is A Bit Strong But...
          <br />
          11. When The Sun Goes Down
          <br />
          12. From The Ritz To The Rubble
          <br />
          13. A Certain Romance
          <br />{" "}
        </h2>
      </div>
      <a
        className="buttoncar"
        target="blank"
        rel="external"
        href={`https://www.amazon.com.br/Whatever-People-Say-Thats-What/dp/B000E116BM`}
      >
        Buy
      </a>
    </>
  );
}
