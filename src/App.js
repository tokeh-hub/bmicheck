import React from 'react'
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Home from './Home';
import Result from './Result';
import useGlobalContext from './context';

function App() {
  
const{result,home} = useGlobalContext()
  return (
   
    <div className="App">
      {home? <Home/>:null}
      {result? <Result/>:null}
      

    </div>
  
  );
}

export default App;
