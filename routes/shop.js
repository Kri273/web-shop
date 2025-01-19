const express = require("express");
const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getProducts);
router.get("/products", shopController.getJustProducts);
router.get("/products/:productId", shopController.getProductDetails);

module.exports = router;
