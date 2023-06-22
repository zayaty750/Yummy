const express = require("express");
const product = require("../controller/food_controller.js");
const router = express.Router();

router.get("/",product.get_product);

router.get("/delete/:id/:img",product.Delete_product);

module.exports = router;
