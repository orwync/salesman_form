var express = require("express");
const OuletService = require("../services/outlet");

var router = express.Router();

router.post("/", async (req, res) => {
  try {
    const outlet = await OuletService.createOutlets(req.body);
    return res.json(outlet);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const outlet = await OuletService.getAllOutlets();

    return res.json(outlet);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const outlet = await OuletService.getOutlet(id);
    return res.json(outlet);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, phone, address } = req.body;
  try {
    const outlet = await OuletService.updateOutlet(id, req.body);
    return res.json(outlet);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const outlet = await OuletService.deleteOutlet(id);
    return res.json(outlet);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
