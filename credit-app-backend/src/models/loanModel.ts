// src/models/loanModel.ts
import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  loanAmount: { type: Number, required: true },
  loanTenure: { type: Number, required: true },
  reason: { type: String, required: true },
  employmentStatus: { type: String, required: true },
  employmentAddress: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Rejected', 'Verified', 'Approved'], default: 'Pending' }
}, { timestamps: true });

export default mongoose.model('Loan', loanSchema);
