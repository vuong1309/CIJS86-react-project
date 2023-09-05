import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
      </Routes>
    </>
  );
}

export default App;
