import './logowanie.css';

import {useState} from 'react';

import {sprawdzCzyIstnieje} from '../database/conecction';

const LogowaniePage = () => {
    let[nick, setNick] = useState("");

    const wyslij = (e) => {
        e.preventDefault();

        sprawdzCzyIstnieje(nick).then((istnieje) => {
            if(istnieje){
                //select user, punkty, cps, funkcje
            }else{
                //nowy user, clicker on
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    return(
        <>
            <div className='main'>
                <div className='logowanie'>
                    <form onSubmit={wyslij}>
                        <div className='logowanieText'>
                            <h1>Logowanie</h1>
                        </div>
                        <input type="text" name='nick' id='nick' onChange={(e) => 
                            setNick(e.target.value)
                        }/><br/>
                        <input type="submit" value="Zaloguj się" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default LogowaniePage;