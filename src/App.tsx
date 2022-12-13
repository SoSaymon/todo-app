import React from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      </BrowserRouter>
  );
}

export default App;
