import { useState } from 'react';
import ClickerPage from './pages/clicker';
import LogowaniePage from './pages/logowanie';

function App() {
  let [zalogowany, setZalogowany] = useState(false);

  if (zalogowany) {
    return (
      <>
        <ClickerPage />
      </>
    )
  } else {
    return (
      <>
        <LogowaniePage />
      </>
    )
  }
}

export default App;
