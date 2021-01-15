const express = require("express");
const router = express.Router();

const penerimaControllers = require("../controllers/penerima");
const multer = require("../middlewares/multer");

router.post("/add", multer.single("penerimaImage"), penerimaControllers.Create);
router.get("/", penerimaControllers.Read);
router.put("/edit/:id", multer.single("penerimaImage"), penerimaControllers.Update);
router.delete("/delete/:id", penerimaControllers.Delete);

module.exports = router;