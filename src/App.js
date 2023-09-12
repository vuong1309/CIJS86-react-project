import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';


import Home from './pages/Home.js';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Account from './pages/Account.js';


import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';

import DeleteMovieForm from './components/DeleteMovieForm';
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
        <Route path='/account' element={<Account />} />
      </Routes>
      <Routes>
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/adminafterlogin' element={<Admin />} />
        <Route path="/admin/users" element={<Users/>} />
        <Route path="/admin/films" element={<Films/>} />
        <Route path="/admin/films/add" element={<AddMovieForm/>} />
        <Route path="/admin/user/add" element={<AddUserForm/>} />
      </Routes>
    </>
  );
}

export default App;



// //App.js
// import React from "react";
// import { BrowserRouter as Router, Route, Navigate, redirect, Routes } from "react-router-dom";
// import AdminLoginTest from "./pages/AdminLoginTest";
// // import AccountPage from "./AccountPage";
// import Account from './pages/Account.js';

// const App = () => {
//   const isAuthenticated = !!localStorage.getItem("user");

//   return (
//       <>
//         <Routes>
//           <Route path="/login" 
//             element={isAuthenticated ? <Navigate to="/account" /> : <AdminLoginTest />}
//           />
//           <Route path="/account"
//             element={isAuthenticated ? <Account /> : <Navigate to="/login" />}
//           />
//           <Route to="/" element={<AdminLoginTest />}/>
//         </Routes>
//       </>
//   );
// };

// export default App;
