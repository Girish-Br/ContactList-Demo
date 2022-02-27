import React, { useState } from 'react';
import "../../styles/loginPage.scss"
import ContactList from './ContactList';
import Navbar from './NavBar';

function DashboardPage() {

  return (
    <div id="register-container">
      <Navbar/>
      <ContactList/>
    </div>
  );
}

export default DashboardPage