const Cart = require('../models/cart');

exports.getCart = (req, res) => {
    const cart = Cart.getCart(req.session);
    res.render('cart', { cart: cart, currentPage: 'cart' });
};

exports.addToCart = (req, res) => {
    const { id, title, price } = req.body;
    Cart.addProduct(req.session, id, title, price);
    res.redirect('/cart');
};

exports.removeFromCart = (req, res) => {
    const { id } = req.body;
    Cart.removeProduct(req.session, id);
    res.redirect('/cart');
};
