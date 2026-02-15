import './clicker.css'
import autoclickerImg from '../images/autoclicker.png' 
import autoclicker2Img from '../images/autoclicker2.png'
import plus1Img from '../images/plus1.png'
import p1Img from '../images/p1.png'
import plus5Img from '../images/plus5.png'
import p5Img from '../images/p5.png'
import cookieImg from '../images/cookie.png'
import kursorImg from '../images/kursor.png'
import cookiegoldImg from '../images/cookiegold.png'
import { useState, useRef, useEffect, useCallback } from 'react';

const ClickerPage = () => {
  let [punkty, setPunkty] = useState(0);
  let [cps, setCps] = useState(1);
  let [klik, setKlik] = useState(0);
  const ciastkoRef = useRef(null);
  const ciastko2Ref = useRef(null);
  const goldTimeoutRef = useRef(null);
  
  const klikanieCiastka = () => {
    let el = ciastkoRef.current;
      if(!el){
        return;
      }
    el.style.transform = "scale(0.8)";
    
    setTimeout(() => {
      el.style.transform = "scale(1)";
    }, 100);
    
    setPunkty(prev => prev + cps * combo2);
    setKlik(prev => prev + 1);
  }
  
  let [autoclicker, setAutoclicker] = useState(false);
  
    const acRef = useRef(true);
    const ac1Ref = useRef(true);
    const ac2Ref = useRef(true);
    const kursorRef = useRef(false);


    const wlaczAutoclicker = () => {
    const el = acRef.current;
    const el1 = ac1Ref.current;
    const el2 = ac2Ref.current;
    const el3 = kursorRef.current;

    if(punkty >= 50){
      setPunkty(prev => prev - 50);
      
      if(!el || !el1 || !el2 || !el3){
        return;
      }

      el.style.display = "none";
      el1.style.display = "none";
      el2.style.display = "block";
      el3.style.display = "block";
      
      if (!autoclicker){
        setAutoclicker(!autoclicker);
      }
    }
  }
  
  let [licznikP1, setLicznikP1] = useState(0);
  let [punktyP1, setPunktyP1] = useState(15);
  
  const tekstp1Ref = useRef(true);
  const p1Ref = useRef(true);
  const p12Ref = useRef(true);

  const plus1Cps = () => {
    let el = tekstp1Ref.current;
    let el1 = p1Ref.current;
    let el2 = p12Ref.current;

    if(punkty >= punktyP1){
      setLicznikP1(prev => prev + 1);  
    }
    if(licznikP1 >= 10){
      if(!el || !el1 || !el2){
        return;
      }

      el1.style.display = "none";
      el2.style.display = "block";
      el.style.display = "none";
    }  
  }
  
  let [licznikP5, setLicznikP5] = useState(0);
  let [punktyP5, setPunktyP5] = useState(50);

  const p5Ref = useRef(true);
  const p52Ref = useRef(false);
  const tekstp5Ref = useRef(true);

  const plus5Cps = () => {
    let el = p5Ref.current;
    let el1 = p52Ref.current;
    let el2 = tekstp5Ref.current;

    if(punkty >= punktyP5){
      setLicznikP5(prev => prev + 1);  
    }
    if(licznikP5 >= 10){
      if(!el || !el1 || !el2){
        return;
      }

      el.style.display = "none";
      el1.style.display = "block";
      el2.style.display = "none";
    }  
  }
  
  let [combo1, setCombo1] = useState(1);
  const xRef = useRef(null);
  let [combo2, setCombo2] = useState(1);

  const ustawCombo = useCallback(() => {

    setCombo1(prev => prev + 0.04);
    setCombo2(Math.floor(combo1));

    clearTimeout(xRef.current);

    xRef.current = setTimeout(() => {
      setCombo1(1);
      setCombo2(1);
    }, 1000);
  }, [combo1])  

  useEffect(() => {
    if (!autoclicker) return;

    const interval = setInterval(() => {
      let el = ciastkoRef.current;
      el.style.transform = "scale(0.8)";
    
    setTimeout(() => {
      el.style.transform = "scale(1)";
    }, 100);
      setPunkty(prev => prev + cps);
      ustawCombo();
    }, 1000);
  
     return () => clearInterval(interval);

  }, [autoclicker, cps, ustawCombo]);

  let [klik2, setKlik2] = useState(50);
  
  useEffect(() => {
    if (klik !== klik2) return;

    const el = ciastkoRef.current;
    const el2 = ciastko2Ref.current;

    if (!el || !el2) return;

    el.style.display = "none";
    el2.style.display = "block";

    if (goldTimeoutRef.current) {
      clearTimeout(goldTimeoutRef.current);
    }

      goldTimeoutRef.current = setTimeout(() => {
      el.style.display = "block";
      el2.style.display = "none";
      
      setKlik2(prev => prev * 2);
      setPunkty(prev => prev + cps * 10);
    }, 5000);

  }, [klik, klik2, cps]);

  return(
    <div id="body">
      <nav>
        <img src={autoclickerImg} alt="autoclicker" id="autoclicker" ref={ac1Ref} onClick={wlaczAutoclicker}/>
        <img src={autoclicker2Img} alt="autoclicker" ref= {ac2Ref}id="autoclicker2"/>
        <h3 className="autoclicker2" ref={acRef}>50 punktów</h3>

        <img src={plus1Img} alt="plus1" id="plus1" ref={p1Ref} onClick={() => {
          plus1Cps();
          
          if(punkty >= punktyP1 && licznikP1 <= 10){   
            setCps(prev => prev + 1);
            setPunkty(prev => prev - punktyP1);
            setPunktyP1(prev => prev + 10);
          }
        }}/>

        <img src={p1Img} alt="plus1" ref={p12Ref} id="p1"/>
        <h3 className="p1" ref={tekstp1Ref}>{punktyP1} punktów</h3>

        <img src={plus5Img} alt="plus5" id="plus5" ref={p5Ref} onClick={() => {
          plus5Cps();
          
          if(punkty >= punktyP5 && licznikP5 <= 10){   
            setCps(prev => prev + 5);
            setPunkty(prev => prev - punktyP5);
            setPunktyP5(prev => prev + 45)
            
          }
        }}/>

        <img src={p5Img} alt="plus5" ref={p52Ref} id="p5"/>
        <h3 className="p5" ref={tekstp5Ref}>{punktyP5} punktów</h3>
    </nav>
    <div id="wynik">{punkty.toFixed(0)}</div>

    <img src={cookieImg} alt="ciastko" id="ciastko" ref={ciastkoRef} 
      onClick={() => { klikanieCiastka(); ustawCombo(); }}
    />

    <img src={cookiegoldImg} alt="ciastko" id="ciastko2" ref={ciastko2Ref}
      onClick={() => { klikanieCiastka(); ustawCombo(); }}
    />

    <img src={kursorImg} alt="kursor" id="kursor" ref={kursorRef}/>
    
    <div id='p'>
      <p>Combo:</p>
    </div>
    <div id="combo">{combo1.toFixed(1)}</div>
  </div>
);
}
export default ClickerPage;