const db = require('../utils/db'); 

const getAdminProducts = async (req, res) => {
    try {
        const [products] = await db.execute('SELECT * FROM products');
        
        res.render('index', {
            products: products || [],
            adminView: true
        });
    } catch (err) {
        console.error('Error fetching admin products: ', err);
        res.status(500).send('Error fetching admin products');
    }
};

module.exports = { getAdminProducts };