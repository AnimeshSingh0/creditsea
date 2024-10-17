import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const VerifierDashboard: React.FC = () => {
  const [loans, setLoans] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/verifier/loans', {
          headers: { Authorization: `Bearer ${auth.token}` }
        });
        setLoans(response.data);
      } catch (error) {
        console.error('Failed to fetch loans:', error);
      }
    };
    fetchLoans();
  }, [auth.token]);

  return (
    <div>
      <h2>Verifier Dashboard</h2>
      <ul>
        {loans.map((loan: any) => (
          <li key={loan._id}>
            {loan.fullName} - {loan.amount} - {loan.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerifierDashboard;
