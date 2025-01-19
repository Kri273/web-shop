const cart = [];

module.exports = class Cart {
    static addProduct(sessionId, productId, title, price) {
        if (!sessionId.cart) {
            sessionId.cart = [];
        }
        const existingProductIndex = sessionId.cart.findIndex(prod => prod.id === productId);
        if (existingProductIndex >= 0) {
            sessionId.cart[existingProductIndex].qty++;
        } else {
            sessionId.cart.push({ id: productId, title, price, qty: 1 });
        }
    }

    static getCart(sessionId) {
        return sessionId.cart || [];
    }

    static removeProduct(sessionId, productId) {
        if (!sessionId.cart) return;

        const existingProductIndex = sessionId.cart.findIndex(prod => prod.id === productId);
        if (existingProductIndex >= 0) {
            if (sessionId.cart[existingProductIndex].qty > 1) {
                sessionId.cart[existingProductIndex].qty--;
            } else {
                sessionId.cart.splice(existingProductIndex, 1);
            }
        }
    }
};
