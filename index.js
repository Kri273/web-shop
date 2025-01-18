const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))

const db = require('./utils/db');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const cartRoutes = require('./routes/cart');

const shopController = require('./controllers/shop'); 
const adminController = require('./controllers/admin');


app.get('/', shopController.getProducts);

app.get('/', (req, res) => {
  res.render('index', {name: 'yes'}); 
});


app.use('/admin', adminRoutes);
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(3005, () => {
    console.log('server is connected at 3005')
});