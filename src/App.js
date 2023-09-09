import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import Home from './pages/Home.js';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css';
import Account from './pages/Account.js';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Routes>
        <Route path='/account' element={<Account />} />
      </Routes>
      <Routes>
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;