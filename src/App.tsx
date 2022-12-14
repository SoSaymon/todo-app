import React, {useEffect} from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./layouts/Header";
import {Main} from "./layouts/Main";
function App() {
    useEffect(() => {
       //  window.onscroll = () => {
       //      addStickyClass()
       //  }
       // const addStickyClass = () => {
       //      const navbar = document.querySelector('.header--nav-main') as HTMLElement
       //      const sticky = navbar.offsetTop
       //      // console.log(sticky)
       //      if (window.pageYOffset >= sticky) {
       //          console.log(window.pageYOffset)
       //          navbar.classList.add("sticky")
       //      } else {
       //          navbar.classList.remove("sticky")
       //      }
       //  }
    }, [])
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <>
             <Header/>
             <Main/>
         </>
      </BrowserRouter>
  );
}

export default App;
