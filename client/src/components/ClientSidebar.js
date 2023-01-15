import React from 'react'
import { NavLink } from 'react-router-dom';
import '../style/ClientSidebar.css';

function ClientSidebar() {
  return (
    <div className='client-sidebar-nav-container'>
      <nav className='client-sidebar-nav'>
        <NavLink exact to='/clients/me'>
          <i class='fa-solid fa-user'></i>&nbsp; Personal details
        </NavLink>
        <NavLink exact to='/clients/me/disputes'>
          <i class='fa-solid fa-calendar-plus'></i>&nbsp; Your disputes
        </NavLink>
        <NavLink exact to='/clients/me/disputes/create'>
          <i class='fa-solid fa-eye'></i>&nbsp; Create dispute
        </NavLink>
      </nav>
    </div>
  );
}

export default ClientSidebar