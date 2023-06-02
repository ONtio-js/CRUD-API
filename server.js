const express = require('express'); 
const mongoose = require('mongoose');
const product = require('./productModel/productModel')
const productController = require('./productContoller/productController')
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/products', productController.findAll);
app.get('/products/:id', productController.findById);
app.post('/products', productController.createProduct);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);

mongoose.connect("mongodb+srv://ontio:theophilus@cluster0.byuppdd.mongodb.net/NODE-API?retryWrites=true&w=majority")
.then(
    () => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`App running on port ${PORT}!`);
        })
    }
   
).catch((err)=> {
    console.error(err);
});
