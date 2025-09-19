import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  unitsBooked: { type: Number, default: 1 },
  amount: { type: Number, required: true },        // total cost
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  paymentId: { type: String },                     // Stripe/Razorpay ref
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Booking", bookingSchema);

