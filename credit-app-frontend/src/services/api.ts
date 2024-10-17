import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const getLoans = async () => {
  const response = await axios.get(`${API_URL}/api/loans`);
  return response.data;
};

export const submitLoanApplication = async (loanData: any) => {
  const response = await axios.post(`${API_URL}/api/loans`, loanData);
  return response.data;
};
