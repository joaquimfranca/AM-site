//imports:

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Theband from './pages/Theband'
import Videos from './pages/Videos'
import Live from './pages/Live'


// Albums:

import Album1 from './pages/Albums/Album1'
import Album2 from './pages/Albums/Album2'
import Album3 from './pages/Albums/Album3'
import Album4 from './pages/Albums/Album4'
import Album5 from './pages/Albums/Album5'
import Album6 from './pages/Albums/Album6'



export default function RoutesApp(){
    return(
       <BrowserRouter>
       <Header/>

       <Routes>

        <Route path="/" element= { <Home/>}/>
        <Route path="/theband" element= { <Theband/>}/>
        <Route path="/videos" element= { <Videos/>}/>
        <Route path="/live" element= { <Live/>}/>
     
       
       </Routes>
       <Routes>
       <Route path="/whatever-people-say-i-am-thats-what-i-am-not-album" element= { <Album1/>}/>
       <Route path="/favorite-worst-nightmare-album" element= { <Album2/>}/>
       <Route path="/humbug-album" element= { <Album3/>}/>
       <Route path="/suck-it-and-see-album" element= { <Album4/>}/>
       <Route path="/am-album" element= { <Album5/>}/>
       <Route path="/tranquility-base-hotel-and-casino-album" element= { <Album6/>}/>
       </Routes>
       
       </BrowserRouter>

    )

}

