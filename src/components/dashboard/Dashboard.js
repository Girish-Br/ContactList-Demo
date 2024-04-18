import React, { useState } from 'react';
import "../../styles/loginPage.scss"
import ContactList from './ContactList';
import Navbar from './NavBar';
import Youtube from './Youtube';

function DashboardPage() {

  return (
    <div id="register-container">
      <Navbar />
      {/* <Youtube /> */}
      <ContactList/>
    </div>
  );
}

export default DashboardPage