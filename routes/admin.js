const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get("/", adminController.getAdminProducts);
router.get('/add-product', (req, res) => {
    res.render('add-product'); 
});
router.get('/edit-product/:id', adminController.getEditProduct);

router.post('/add-product', adminController.addProduct);
router.post('/edit-product', adminController.postEditProduct);
router.post('/delete-product/:id', adminController.deleteProduct);

module.exports = router;