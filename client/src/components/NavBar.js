import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg';
import '../style/NavBar.css';
import AdvocateProfile from './AdvocateProfile';
import AdvocateSignUp from './AdvocateSignUp';

function NavBar({ userClient, setUserClient, userAdvocate, setUserAdvocate }) {
  // IF ELSEIF ELSE STATEMENT
  // https://stackoverflow.com/questions/38810843/how-can-i-write-an-else-if-structure-using-react-jsx-the-ternary-is-not-expr
  function handleLogoutClick() {
    // eslint-disable-next-line
    {
      userClient
        ? fetch('/api/clients/logout', {
            method: 'DELETE',
          }).then((r) => {
            if (r.ok) {
              setUserClient(null);
            }
          })
        : userAdvocate
        ? fetch('/api/advocates/logout', {
            method: 'DELETE',
          }).then((r) => {
            if (r.ok) {
              setUserAdvocate(null);
            }
          })
        : alert('Not authorized!');
    }
  }

  return (
    <>
      <header>
        <section className='header-topbar-section'>
          <div className='logo'>
            <img src={logo} alt='logo' />
            <h2>
              C. NJOMO <br /> ADVOCATES LLP
            </h2>
          </div>
          <div className='header-details-section'>
            <div className='first-section-details'>
              <i class='fa-solid fa-phone-volume'></i>
              <p>
                Ngonglane Plaza, Nairobi <br />
                <span>(+254) 712 345 678</span>
              </p>
            </div>
            <div className='second-section-details'>
              <i class='fa-solid fa-clock'></i>
              <p>
                Our Office Hours: Mon - Sat <br />
                <span>09.00am - 05.00pm</span>
              </p>
            </div>
          </div>
        </section>
        <section className='header-bottom-bar'>
          <div>
            <nav className='header-bottom-bar-nav'>
              <NavLink exact to='/'>
                Home
              </NavLink>
              <NavLink exact to='/advocates/me'>
                Dashboard
              </NavLink>
            </nav>
            {userClient
              ? `Hi ${userClient.name}! Logged in a client!`
              : userAdvocate
              ? `Hi ${userAdvocate.name}! Logged in as Advocate!`
              : 'Not logged in!'}

            {userClient || userAdvocate ? (
              <NavLink to='/'>
                <button onClick={handleLogoutClick}>Logout</button>
              </NavLink>
            ) : (
              <nav className='session-bottom-bar-nav'>
                <NavLink exact to='/login'>
                  Login
                </NavLink>
                <NavLink exact to='/clients/signup'>
                  Sign Up
                </NavLink>
              </nav>
            )}
          </div>
        </section>
      </header>
    </>
  );
}

export default NavBar;
