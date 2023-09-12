import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

//import home, signup, login, account, search pages
import Home from './pages/Home.js';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Account from './pages/Account.js';
import Search from './pages/Search';

//import admin
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import AddMovieForm from './components/AddMovieForm';
import Films from './components/admin/Films';
import Users from './components/admin/Users';
import AddUserForm from './components/AddUserForm';



function App() {
  const isAuthenticated = !!localStorage.getItem("user");
  return (
    <>
      <Routes>
        <Route path="/login"
          element={isAuthenticated ? <Navigate to="/account" /> : <Login />}
        />
        <Route path="/account"
          element={isAuthenticated ? <Account /> : <Navigate to="/login" />}
        />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

      <Routes>
        <Route path='/search' element={<Search />} />
      </Routes>

      <Routes>


      <Route path="/admin" 
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <AdminLogin />}
        />
        <Route path="/dashboard"
            element={isAuthenticated ? <Admin /> : <Navigate to="/admin" />}
        />
        <Route path="/admin/users"
            element={isAuthenticated ? <Users /> : <Navigate to="/admin" />}
        />
        <Route path="/admin/films"
            element={isAuthenticated ? <Films /> : <Navigate to="/admin" />}
        />
        <Route path="/admin/films/add"
            element={isAuthenticated ? <AddMovieForm /> : <Navigate to="/admin" />}
        />
        <Route path="/admin/user/add"
            element={isAuthenticated ? <AddUserForm /> : <Navigate to="/admin" />}
        />
      </Routes>
    </>
  );
}

export default App;
