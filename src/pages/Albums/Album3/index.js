
import cover1 from './capa.jpg'
export default function Album1(){

    return(
        <>
         <h1>Humbug</h1>
         
        <div className='container'>
       <div className='cover1'> <img src={cover1}></img> </div>
      
<h2>

Tracklist: <br/>
1.	My Propeller<br/>
2.	Crying Lightning<br/>
3.	Dangerous Animals<br/>
4.	Secret Door<br/>
5.	Potion Approaching<br/>
6.	Fire and the Thud<br/>
7.	Cornerstone<br/>
8.	Dance Little Liar<br/>
9.	Pretty Visitors<br/>
10.	The Jeweller's Hands<br/>

</h2>
    </div>
    <a className='a1' target='blank' rel='external' href={`https://www.amazon.com.br/Humbug-Disco-Vinil-Arctic-Monkeys/dp/B002EWD090/ref=sr_1_1?crid=13DY3LMOSORPZ&keywords=humbug+arctic+monkey&qid=1677171260&sprefix=humbug%2Caps%2C241&sr=8-1&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678`}> 
              Buy</a>


</>
    )
}