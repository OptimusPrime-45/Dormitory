import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  title: { type: String, required: true },          // e.g. "Single AC Room"
  description: { type: String },
  pricePerMonth: { type: Number, required: true },
  roomType: { type: String, enum: ["single", "double", "triple", "dorm"], required: true },
  amenities: [{ type: String }],                   // e.g. ["WiFi", "Laundry", "AC"]
  images: [{ url: String, public_id: String }],    // Cloudinary / S3 storage
  totalUnits: { type: Number, default: 1 },        // how many such rooms exist
  availableUnits: { type: Number, default: 1 },    // how many are free
  location: {
    address: { type: String },
    coords: { type: [Number], index: "2dsphere" }  // [lng, lat]
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Room", roomSchema);
