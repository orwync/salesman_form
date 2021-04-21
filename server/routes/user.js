const express = require("express");
const { User } = require("../models");
const UserService = require("../services/user");

var router = express.Router();

router.post("/", async (req, res) => {
  const { name, phone, rep_manager } = req.body;

  try {
    const user = await User.create({ name, phone, rep_manager });
    return res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await UserService.getAllUsers();

    return res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserService.getUser(id);
    return res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserService.updateUser(id, req.body);
    return res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserService.deleteUser(id);
    return res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
