const mongoose = require('mongoose');
const dbName = process.env.DBNAME || 'products';

async function connectDB(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);
}

module.exports = connectDB;