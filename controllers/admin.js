const db = require('../utils/db'); 

const getAdminProducts = async (req, res) => {
    try {
        const [products] = await db.execute('SELECT * FROM products');
        
        res.render('admin-products', {
            products: products,
            adminView: true
        });
    } catch (err) {
        console.error('Error fetching admin products: ', err);
        res.status(500).send('Error fetching admin products');
    }
};

const addProduct = async (req, res) => {
    const { title, imageUrl, price, description } = req.body;

    if (!title || !imageUrl || !price || !description) {
        return res.status(400).send('All fields are required');
    }

    try {
        await db.execute('INSERT INTO products (title, imageUrl, price, description) VALUES (?, ?, ?, ?)', [
            title,
            imageUrl,
            price,
            description
        ]);

        res.redirect('/admin');
    } catch (err) {
        console.error('Error adding product: ', err);
        res.status(500).send('Error adding product');
    }
};

const getEditProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        const [product] = await db.execute('SELECT * FROM products WHERE id = ?', [productId]);

        if (product.length === 0) {
            return res.status(404).send('Product not found');
        }

        res.render('edit-product', {
            product: product[0]
        });
    } catch (err) {
        console.error('Error fetching product for edit: ', err);
        res.status(500).send('Error fetching product');
    }
};

const postEditProduct = async (req, res) => {
    const { id, title, imageUrl, price, description } = req.body;

    try {
        await db.execute(
            'UPDATE products SET title = ?, imageUrl = ?, price = ?, description = ? WHERE id = ?',
            [title, imageUrl, price, description, id]
        );

        res.redirect('/admin');
    } catch (err) {
        console.error('Error updating product: ', err);
        res.status(500).send('Error updating product');
    }
};

const deleteProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        await db.execute('DELETE FROM products WHERE id = ?', [productId]);
        res.redirect('/admin');
    } catch (err) {
        console.error('Error deleting product: ', err);
        res.status(500).send('Error deleting product');
    }
};


module.exports = { getAdminProducts, addProduct, getEditProduct, postEditProduct, deleteProduct };