const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

//# Specific routes take precedence over dynamic routes
//? Eg: Deleting a product is parsed first/takes priority over looking up a product based on a dynamic ID

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

// * Getting the ID using :
// -> It indicates not to search for a route but search for a param
router.get("/products/:productId", shopController.getProductById);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
