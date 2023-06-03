const express = require('express'); 
const connectDB = require('./database/database');
const productRouter = require('./Routes/route');
const authRouter = require('./Routes/Auth');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(productRouter);
app.use(authRouter);

connectDB()
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
