import { Router } from 'react-router';
import './App.scss';
import Navbar from './Components/Navbar/Navbar.js';
import TourList from './Components/TourList'


function App() {
  return (
    <main>
      <Navbar/>
      <TourList/>
    </main>
      
    );
}

export default App;
