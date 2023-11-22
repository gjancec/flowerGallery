
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import DotGroup from './components/DotGroup';
import Contact from './components/Contact';
import {useEffect, useState } from 'react';
import useMediaQuery  from './assets/hooks/useMediaQuery';


function App() {
  const [selectedPage, setSelectedPage]=useState('home');
  const[isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px )");

  useEffect(()=> {
    const handleScroll = () => {
    if(window.scrollY === 0) setIsTopOfPage(true);
    if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
  <div>
    <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    <div className ="w-5/6 mx-auto md:h-full">
      {isAboveMediumScreens  && (
        <DotGroup 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
      )}
    </div>
    <Landing setSelectedPage={setSelectedPage}/>
    

  </div>
  );
}

export default App;
