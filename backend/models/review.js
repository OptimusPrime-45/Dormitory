import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String, required: true },
  approved: { type: Boolean, default: false }, // admin moderation
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema);
