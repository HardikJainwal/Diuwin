import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPassword from './pages/ForgotPassword';
import CustomerService from './pages/CustomerService';
import AccountPage from './pages/AccountPage';
import Wallet from './pages/Wallet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/customerservice" element={<CustomerService/>} />
        <Route path="/accountpage" element={<AccountPage/>} />
        <Route path="/wallet" element={<Wallet/>} />
        {/* Redirect to /login if no routes match */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
