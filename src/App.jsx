import React,{useEffect, useState} from "react"
import Background from './Components/Background/Background.jsx';
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'


function App() {
 
  const heroData = [
    {text1:"Nah, I’d Win....", text2:"Ryōiki Tenkai"},
    {text1:"Don't worry", text2:"I'm the strongest"},
    {text1:"Throughout heaven and earth", text2:"I alone am the honored one"}
  ]
  const[heroCount,setHeroCount] = useState(0);
  const[playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])
  return (
    <>
     <Background playStatus={playStatus} heroCount={heroCount}/>
     <Navbar/>
     <Hero
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}

     />
    </>
  );
}

export default App
