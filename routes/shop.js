const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', (req, res, next) => {
    res.send('<b>Web shop page</b>');
});
router.get('/', shopController.getProducts);


module.exports = router;