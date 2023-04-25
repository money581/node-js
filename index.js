const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/add-product', (req, res, next) => {

    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="add product name"><input type="text" name="size" placeholder="size of product"><button type="submit">Add Product</button><form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

app.use((req, res, next) => {

    res.send('<h1>hello from express jss!</h1>');

});
app.listen(3000);
