const express = require("express");
const router = express.Router();

const donaturControllers = require("../controllers/donatur");

router.post("/add", donaturControllers.Create);
router.get("/", donaturControllers.Read);
router.put("/edit/:id", donaturControllers.Update);
router.delete("/delete/:id", donaturControllers.Delete);
router.post("/login", donaturControllers.Login);

module.exports = router;

