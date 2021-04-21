var express = require("express");
const ProductService = require("../services/product");

var router = express.Router();

router.post("/", async (req, res) => {
  try {
    const product = await ProductService.createProduct(req.body);
    return res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const product = await ProductService.getAllProducts();
    return res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductService.getProduct(id);
    return res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductService.updateProduct(id, req.body);
    return res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductService.deleteProduct(id);
    return res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
