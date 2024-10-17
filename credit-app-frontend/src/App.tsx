import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LoanApplicationForm from './components/LoanApplicationForm';
import AdminDashboard from './components/AdminDashboard';
import VerifierDashboard from './components/VerifierDashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<LoanApplicationForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/verifier" element={<VerifierDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
