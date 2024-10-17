import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const LoanApplicationForm: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [reason, setReason] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [employmentAddress, setEmploymentAddress] = useState('');
  const auth = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/users/apply-loan', {
        amount,
        tenure,
        reason,
        employmentStatus,
        employmentAddress
      }, {
        headers: { Authorization: `Bearer ${auth.token}` }
      });
      alert('Loan application submitted!');
    } catch (error) {
      console.error('Loan application failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Apply for Loan</h2>
      <input
        type="number"
        placeholder="Loan Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tenure (months)"
        value={tenure}
        onChange={(e) => setTenure(e.target.value)}
      />
      <input
        type="text"
        placeholder="Reason for Loan"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
      <input
        type="text"
        placeholder="Employment Status"
        value={employmentStatus}
        onChange={(e) => setEmploymentStatus(e.target.value)}
      />
      <input
        type="text"
        placeholder="Employment Address"
        value={employmentAddress}
        onChange={(e) => setEmploymentAddress(e.target.value)}
      />
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default LoanApplicationForm;
