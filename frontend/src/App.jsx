import { useState, createContext,useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Marketplace from './components/Marketplace/Marketplace'
import Cart from './components/Cart/Cart'
import SigninForm from './components/Home/SigninForm';
import SignupForm from './components/Home/SignupForm';


import * as authService from '../src/services/authService'
import './App.css';
import AdminPanel from './components/Admin/AdminPanel';


export const AuthedUserContext = createContext(null);


function App() {
  
  const navigate = useNavigate();

  const [user, setUser] = useState(authService.getUser()); // look for an active user

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  useEffect(() => {
    console.log('App user state:', user);
    if (!user) {
      navigate('/')
    }
  }, [user]);
  
  return (
    <>
      <AuthedUserContext.Provider value={user}>
        {/* <Navbar handleSignout={handleSignout}/> */}
        <Navbar handleSignout={handleSignout}/>
        <div className="appContainer">
          <Routes>
            {user ?  (
              <>
                <Route path='/marketplace' element={<Marketplace />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/admin' element={<AdminPanel />} />
              </> 
            ) : (
              <>
                <Route path="/" element={<SigninForm setUser={setUser} />} />
                <Route path="/signup" element={<SignupForm setUser={setUser} />} />
                
              </>
            )}
            
          </Routes>
        </div>
      </AuthedUserContext.Provider>
    </>
  );
}

export default App;


// In-Source Test
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest


  describe('App', () => {

    let container = null;

    beforeEach(() => {
      // Set up a DOM element as a render target
      container = document.createElement('div');
      container.setAttribute('id', 'root');
      document.body.appendChild(container);
    });
  
    it('renders the App component', () => {
      const { container } = render(
        <Router>
          <App />
        </Router>,
        { container: document.getElementById('root') } // Specify the container
      );
    });

    it('renders the navigation bar', () => {
      const { container } = render(
        <Router>
          <App />
        </Router>,
        { container: document.getElementById('root') } // Specify the container
      );
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  

  })
}