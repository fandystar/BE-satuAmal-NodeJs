const express = require("express");
const router = express.Router();

const donasiControllers = require("../controllers/donasi");
const multerDonasi = require("../middlewares/multerDonasi");

router.post("/add", multerDonasi.single("donasiImage"), donasiControllers.Create);
router.get("/", donasiControllers.Read);
router.put("/edit/:id", multerDonasi.single("donasiImage"), donasiControllers.Update);
router.delete("/delete/:id", donasiControllers.Delete);

module.exports = router;