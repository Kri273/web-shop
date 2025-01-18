const cart = [];

module.exports = class Cart {
    static addProduct(id, name, price) {
        const existingProductIndex = cart.findIndex(prod => prod.id === id);
        if (existingProductIndex >= 0) {
            cart[existingProductIndex].qty++;
        } else {
            cart.push({ id, name, price, qty: 1 });
        }
    }

    static getCart() {
        return cart;
    }

    static removeProduct(id) {
        const index = cart.findIndex(prod => prod.id === id);
        if (index >= 0) {
            cart.splice(index, 1);
        }
    }
};
