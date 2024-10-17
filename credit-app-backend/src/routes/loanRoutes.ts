// src/routes/loanRoutes.ts
import { Router } from 'express';
import { applyForLoan, getLoans, updateLoanStatus } from '../controllers/loanController';
import { verifyUser, isVerifier, isAdmin } from '../middleware/authMiddleware';

const router = Router();

router.post('/', verifyUser, applyForLoan);
router.get('/', verifyUser, getLoans);
router.put('/:loanId/status', verifyUser, isVerifier, updateLoanStatus);

export default router;
