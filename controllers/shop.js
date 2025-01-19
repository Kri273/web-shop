const db = require('../utils/db')

const getProducts = async (req, res) => {
    try {
        const [products] = await db.execute('SELECT * FROM products');
        res.render('index', {
            products: products,
            adminView: false
        });
    } catch (err) {
        console.error('Error fetching products: ', err);
        res.status(500).send('Error fetching products');
    }
};

const getJustProducts = async (req, res) => {
    try {
        const [products] = await db.execute('SELECT * FROM products');
        res.render('products', {
            products: products,
            adminView: false
        });
    } catch (err) {
        console.error('Error fetching products: ', err);
        res.status(500).send('Error fetching products');
    }
};

const getProductDetails = async (req, res) => {
    const productId = req.params.productId;
    try {
        const [product] = await db.execute('SELECT * FROM products WHERE id = ?', [productId]);
        if (product.length === 0) {
            return res.status(404).render('404');
        }
        res.render('product-detail', {
            product: product[0]
        });
    } catch (err) {
        console.error('Error fetching product details: ', err);
        res.status(500).send('Error fetching product details');
    }
};

module.exports = { getProducts, getJustProducts, getProductDetails };
