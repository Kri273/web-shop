const Cart = require('../models/cart');

exports.getCart = (req, res) => {
    const cart = Cart.getCart();
    res.render('cart', { cart: cart });
};

exports.addToCart = (req, res) => {
    const { id, name, price } = req.body;
    Cart.addProduct(id, name, price);
    res.redirect('/cart');
};

exports.removeFromCart = (req, res) => {
    const { id } = req.body;
    Cart.removeProduct(id);
    res.redirect('/cart');
};
