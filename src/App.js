import './App.css'; 
import ClickerPage from './pages/clicker';
import LogowaniePage from './pages/logowanie';
import { useState, useRef, useEffect } from 'react';


function App() {
  // let [zalogowany, setZalogowany] = useState(false);
  // if(zalogowany){
    return(
      <>
        <ClickerPage/>
      </>
    )
  // }else{
    // return(
    //   <>
    //     <LogowaniePage/>
    //   </>
    // )
  // } 
}

export default App;