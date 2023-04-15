
import cover1 from './capa.jpg'
export default function Album1(){

    return(
        <>
          <h1>Favourite Worst Nightmare</h1>
        <div className='container'>

       <div className='cover1'> <img src={cover1}></img> </div>
    

<h2>

Tracklist: <br/>
1. 	Brianstorm<br/>
2. 	Teddy Picker<br/>
3. 	D Is for Dangerous<br/>
4. 	Balaclava<br/>
5. 	Fluorescent Adolescent<br/>
6. 	Only Ones Who Know<br/>
7. 	Do Me a Favour<br/>
8. 	This House Is a Circus<br/>
9. 	If You Were There, Beware<br/>
10. The Bad Thing<br/>
11. Old Yellow Bricks<br/>
12. 505<br/>
</h2>
    </div>
    <a className='a1' target='blank' rel='external' href={`https://www.amazon.com.br/Favourite-Worst-Nightmare-Disco-Vinil/dp/B000NA2UMS/ref=sr_1_1?crid=3TKM96OV431RD&keywords=favorite+worst+nightmare&qid=1677161520&sprefix=favorite%2Caps%2C283&sr=8-1`}> 
              Buy</a>
</>
    )
}