//Model for order placed - to be sent from user

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  orderItems: { type: [String], required: true },
  orderQuantity: { type: [String], required: true },
  itemTotal: { type: Number, required: true },
  deliveryCharge: { type: Number },
  taxes: { type: Number, required: true },
  cookingInstructions: { type: String },
  orderType: { type: String, required: true }, //dinein or takeout
  orderStatus: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  completedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
