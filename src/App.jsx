import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import LogOut from './components/LogOut';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <Navbar isAuth={isAuth} ></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/createpost' element={<CreatePost isAuth={isAuth} />}></Route>
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}></Route>
        <Route path='/logout' element={<LogOut setIsAuth={setIsAuth} />}></Route>
      </Routes>

    </Router>
  )
}

export default App
