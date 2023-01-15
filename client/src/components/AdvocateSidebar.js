import React from 'react'
import { NavLink } from 'react-router-dom';
import '../style/AdvocateSidebar.css';

function AdvocateSidebar() {
  return (
    <div className='advocate-sidebar-nav-container'>
      <nav className='advocate-sidebar-nav'>
        <NavLink exact to='/advocates/me'>
          <i class='fa-solid fa-user'></i>&nbsp; Personal details
        </NavLink>
        <NavLink exact to='/advocates/me/clients'>
          <i class='fa-solid fa-calendar-plus'></i>&nbsp; Your clients
        </NavLink>
        <NavLink exact to='/advocates/me/disputes'>
          <i class='fa-solid fa-eye'></i>&nbsp; Your disputes
        </NavLink>
      </nav>
    </div>
  );
}

export default AdvocateSidebar