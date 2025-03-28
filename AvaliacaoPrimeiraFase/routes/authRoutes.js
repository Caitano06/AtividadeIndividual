const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/login", (req, res) => {
  const { nome } = req.body; 
  if (!nome) {
    return res.status(400).json({ message: "Nome é obrigatório" });
  }

  const user = { nome }; 
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.status(200).json({ token });
});

module.exports = router;