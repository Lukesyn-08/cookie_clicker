import './logowanie.css';

import { useState } from 'react';

import { sprawdzCzyIstnieje } from '../database/connection';

const LogowaniePage = () => {
  let [nick, setNick] = useState("");

  const wyslij = (e) => {
    e.preventDefault();

    sprawdzCzyIstnieje(nick).then((istnieje) => {
      if (istnieje) {
        // select
        // uzytkownika
        // cps, punkty, czykupionyAutoclicker, czyWlaczony
      } else {
        // tworzymy uzytkownika
        // odpalamy clicker
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <div className='main'>
        <div className='logowanie'>
          <form onSubmit={wyslij}>
            <div className='logowanieText'>Logowanie</div>
            <input type='text' name="nick" id="nick" onChange={(e) => setNick(e.target.value)} /><br />
            <input type='submit' value="Zaloguj" />
          </form>
        </div>
      </div>
    </>
  );
}

export default LogowaniePage;
