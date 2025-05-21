const express = require("express");
const router = express.Router();

const Order = require("../models/order.schema");

//placing an order
router.post("/", async (req, res) => {
  const {
    name,
    phone,
    address,
    orderItems,
    orderQuantity,
    itemTotal,
    deliveryCharge,
    taxes,
    cookingInstructions,
    table,
    orderType,
    orderStatus,
    createdAt,
    completedAt,
  } = req.body;
  try {
    const order = await Order.create({
      name,
      phone,
      address,
      orderItems,
      orderQuantity,
      itemTotal,
      deliveryCharge,
      taxes,
      cookingInstructions,
      table,
      orderType,
      orderStatus,
      createdAt,
      completedAt,
    });
    console.log(order);
    res.status(201).send(order);
  } catch (err) {
    console.log(`Unable to create order ${err}`);
  }
});

module.exports = router;
