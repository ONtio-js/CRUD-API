const express = require('express'); 
const mongoose = require('mongoose');
const connectDB = require('./database/database');
// const product = require('./productModel/productModel')
const productRouter = require('./Routes/route');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(productRouter);

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
