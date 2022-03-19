import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Surahs from './components/Surahs/Surahs';


function App() {
  const [surahs, setSurahs] = useState([]);
  useEffect(() => {
    fetch('http://api.alquran.cloud/v1/quran/ar.alafasy')
      .then(res => res.json())
      .then(data => setSurahs(data.data.surahs))
  }, []);
  console.log(surahs);
  return (
    <div className="App bg-primary">
      {
        surahs.map(surah => <Surahs key={surah.number} surah={surah}></Surahs>)
      }

    </div>
  );
}

export default App;
