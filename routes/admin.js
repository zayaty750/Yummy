const express = require("express");
var bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const Product = require("../controller/food_controller");

router.get("/add-product",(req,res)=>
{
    res.render('admin');
});
router.post("/add-product",Product.Add_product);

module.exports = router;