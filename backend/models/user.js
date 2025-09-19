import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true }, // hashed
  role: { type: String, enum: ["user", "admin", "manager"], default: "user" },
  phone: String,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("User", userSchema);
