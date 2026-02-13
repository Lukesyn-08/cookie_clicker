import mariadb from 'mariadb';
// $con = mysqli_connect("localhost", "root", "", ");
// $i = 0;
// $i = ++$i
// mysqli_close($con);
//
// const l = pool.query();
// dfjsdfjsd
// $i = ++$i
// mysqli_close($con);

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cookie_clicker'
});

const sprawdzCzyIstnieje = async (nick) => {
  const zapytanie = "SELECT COUNT(*) AS total FROM uzytkownicy WHERE nick='?';";

  // mysqli_query($conn, $kwerenda)
  //
  const result = await pool.query(zapytanie, [nick]);

  const count = Number(result[0].total);

  if (count > 0) {
    return true;
  } else {
    return false;
  }
}

export {
  sprawdzCzyIstnieje,
  pool
}
