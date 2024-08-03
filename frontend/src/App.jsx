import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';



import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
// import Marketplace from './components/Marketplace/Marketplace'
import * as authService from '../src/services/authService'
import './App.css';

function App() {

  const [user, setUser] = useState(authService.getUser()); // using the method from authservice
  const [gameLogs, setGameLogs] = useState([])
  const [logsSnapshot, setLogsSnapshot] = useState([])

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  useEffect(() => {
    console.log('App user state:', user);
  }, [user]);
  
  
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home setUser={setUser}/>}/>
          {/* <Route path='/marketplace' element={<Marketplace />} /> */}
          {/* <Route path='/cart' element={<Cart />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
