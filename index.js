const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js'); // 0. Import Model
const app = express()

app.use(express.json()) // 1. Add Middleware

app.listen(3000, () => {
    console.log("Server Started") // 3. Start Server
})

app.get('/', function (req, res) {
    res.send('Hello World from express application')
}) // 2. Add Routes 

app.post('/api/products', async (req, res) =>{ // 4. Add Product
    try {
        const product = await Product.create(req.body); // 5. Create Product from Request
        res.status(200).json(product); // 6. Send Product Response 

    } catch (error) {
        res.status(500).json({ message: error.message }); // 7. Send Error
    }

    // console.log(req.body);
    // res.send(req.body);
})





//mongodb+srv://pulakkar85:wLWV1QdwQcXu4nX0@backenddb.fwvbaqq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB
mongoose.connect("mongodb://localhost:27017/pulok_db")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((e) => {
        console.log("connected error", e);
    }); 