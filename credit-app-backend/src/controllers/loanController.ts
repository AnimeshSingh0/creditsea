// src/controllers/loanController.ts
import { Request, Response } from 'express';
import Loan from '../models/loanModel';

export const applyForLoan = async (req: Request, res: Response) => {
  const { loanAmount, loanTenure, reason, employmentStatus, employmentAddress } = req.body;
  const user = req.user;

  try {
    const newLoan = new Loan({
      user: user._id,
      loanAmount,
      loanTenure,
      reason,
      employmentStatus,
      employmentAddress,
      status: 'Pending'
    });
    await newLoan.save();
    res.status(201).json(newLoan);
  } catch (error) {
    res.status(500).json({ message: 'Error applying for loan' });
  }
};

export const getLoans = async (req: Request, res: Response) => {
  try {
    const loans = req.user.role === 'user' ? 
      await Loan.find({ user: req.user._id }) : 
      await Loan.find();
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving loans' });
  }
};

export const updateLoanStatus = async (req: Request, res: Response) => {
  const { loanId } = req.params;
  const { status } = req.body;

  try {
    const loan = await Loan.findById(loanId);
    if (!loan) return res.status(404).json({ message: 'Loan not found' });

    loan.status = status;
    await loan.save();
    res.status(200).json(loan);
  } catch (error) {
    res.status(500).json({ message: 'Error updating loan status' });
  }
};
