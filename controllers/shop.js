const db = require('../utils/db')

const getProducts = async (req, res) => {
    try {
        const [products] = await db.execute('SELECT * FROM products');
        console.log(products)
        res.render('index', {
            products: products,
            adminView: false
        });
    } catch (err) {
        console.error('Error fetching products: ', err);
        res.status(500).send('Error fetching products');
     }
};


module.exports = { getProducts };