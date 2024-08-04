/* =======================================================
Imports
=======================================================*/

// import { Link } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import styles from "./Navbar.module.css";

/* =======================================================
Helper Functions
=======================================================*/

/* =======================================================
Component
=======================================================*/

function Navbar({handleSignout}) {
  /*--------------- States/Hooks ---------------*/
  const user = useContext(AuthedUserContext);

  /*--------------- Return ---------------*/

  return (
    <>
      <nav>
        <h3>nav bar</h3>
          {user ? (
          <div className={styles.navRight}>
            
            
            <ul>
              <li><Link to='/cart'>My Cart</Link></li>
              <li><Link to="/Marketplace">Markteplace</Link></li>
              <li><Link to='' onClick={handleSignout}>Sign Out</Link></li>
            </ul>
          </div>
          ) : (
            <ul>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/signin">Log In</Link></li>
          </ul>
          )}
      </nav>
      
    </>
  );
}

export default Navbar;
