import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login'
import './App.css';
import Navbar from './components/Navbar.js';
import Account from './pages/Account.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      <Navbar/>
      <Routes>
        <Route path='/account' element={<Account />} />
      </Routes>
    </>
  );
}

export default App;