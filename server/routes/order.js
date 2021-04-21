var express = require("express");
const { Order } = require("../models");
// const createOrder = require("../services/order");
const OrderService = require("../services/order");

var router = express.Router();

router.post("/", async (req, res) => {
  // const { user_id, product_id, outlet_id, quantity } = req.body;
  try {
    const order = await OrderService.createOrder(req.body);

    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const order = await OrderService.getAllOrders();
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const order = await OrderService.getOrder(id);
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const order = await OrderService.updateOrder(id, req.body);
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const order = await OrderService.deleteOrder(id);
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

router.post("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const order = await OrderService.getOrderByUser(id, req.body);
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

router.post("/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const order = await OrderService.getOrderByProduct(id, req.body);
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

router.post("/outlet/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const order = await OrderService.getOrderByOutlet(id, req.body);
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

module.exports = router;
