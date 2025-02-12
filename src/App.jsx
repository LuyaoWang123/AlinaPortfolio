import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Portofolio from './components/structural/Portofolio'
import { useEffect } from 'react';
import Theme from './utils/theme';

function App() {
  useEffect(() => {
    Theme.applyTheme();
  }, []);
  return <Portofolio/>
}

export default App
