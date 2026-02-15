//  import mariadb from 'mariadb';

//  const pool = mariadb.createPool({
//      host:  'localhost',
//      root: 'root',
//      password: 'root',
//      database: 'cookie_clicker'
//  });

//  const sprawdzCzyIstnieje = async(nick) => {
//      const zapytanie = "select count(*) as total from uzytkownicy where nick = '?';";

//      const result = await pool.query(zapytanie, [nick]);

//      const count = Number(result[0].total);

//     if(count > 0){
//          return true;
//      }else{
//          return false;
//      }
//  }

//  export {
//      sprawdzCzyIstnieje,
//      pool
//  }