const express = require("express");
const router = express.Router();

const donasiControllers = require("../controllers/donasi");
const multer = require("../middlewares/multer");

router.post("/add", multer.single("donasiImage"), donasiControllers.Create);
router.get("/", donasiControllers.Read);
router.put("/edit/:id", multer.single("donasiImage"), donasiControllers.Update);
router.delete("/delete/:id", donasiControllers.Delete);

module.exports = router;