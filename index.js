const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js'); // 0. Import Model
const app = express()

app.use(express.json()) // 1. Add Middleware


// ----------------start server-----------------------
app.listen(3000, () => {
    console.log("Server Started") // 2. Start Server
})




// ----------------routes-----------------------
app.get('/', function (req, res) { // 3. Add Routes
    res.send('Hello World from express application')
}) // 3. Add Routes 




// ----------------get all products-----------------------
app.get('/api/products', async (req, res) => {  // 3. Add Routes to get all products
    try {
        const products = await Product.find(); // 4. Find Product from DB
        res.status(200).json(products); // 5. Send Product Response
    } catch (error) {
        res.status(500).json({ message: error.message }); // 6. Send Error
    }
})


// ----------------add product-----------------------
app.post('/api/products', async (req, res) => {    // 4. Add Product into DB //controller
    try {
        const product = await Product.create(req.body);  // 5. Create Product from Request saved in DB
        res.status(200).json(product);  // 6. Send Product Response

    } catch (error) {
        res.status(500).json({ message: error.message }); // 7. Send Error
    }

    // console.log(req.body);
    // res.send(req.body);
})




// ----------------connect to DB-----------------------
//mongodb+srv://pulakkar85:wLWV1QdwQcXu4nX0@backenddb.fwvbaqq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB
mongoose.connect("mongodb://localhost:27017/pulok_db")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((e) => {
        console.log("connected error", e);
    }); 

