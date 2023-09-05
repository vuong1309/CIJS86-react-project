import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
import Account from './pages/Account.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/account' element={<Account />} />
      </Routes>
    </>
  );
}

export default App;