import React from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./layouts/Header";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header/>
      </BrowserRouter>
  );
}

export default App;
