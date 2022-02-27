import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from '../components/dashboard/LoginPage';
import RegisterPage from '../components/dashboard/RegisterPage';
import DashboardPage from '../components/dashboard/Dashboard';

export default function RouterComp() {
      return (
            <div className="wrapper">
                  <BrowserRouter>
                        <Routes>
                              <Route exact path="/" element={<LoginPage />} />
                              <Route path="register" element={<RegisterPage />} />
                              <Route path="home" element={<DashboardPage />} />
                        </Routes>
                  </BrowserRouter>
            </div>
      );
}
