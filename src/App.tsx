import React from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./layouts/Header";
import {Main} from "./layouts/Main";
import {Footer} from "./layouts/Footer";
function App() {
    const location = window.location.pathname;
    console.log(location);
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <>
             <Header/>
             <Main/>
             {location !== '/app' && <Footer/>}
         </>
      </BrowserRouter>
  );
}

export default App;
