// src/models/userModel.ts
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin', 'verifier'], default: 'user' }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
