const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js'); // 0. Import Model
const productRoute = require('./routes/product.route.js');
const app = express()


// ----------------middleware-----------------------
app.use(express.json()) // 1. Add Middleware for json data
app.use(express.urlencoded({ extended: false })); // 1. Add Middleware for urlencoded data


// ----------------start server-----------------------
app.listen(3000, () => {
    console.log("Server Started") // 2. Start Server
});




// ----------------routes-----------------------
app.get('/', function (req, res) { // 3. Add Routes
    res.send('Hello World from express application')});
app.use('/api/products', productRoute );




// // ----------------get all products-----------------------
// app.get('/api/products', async (req, res) => {  // 3. Add Routes to get all products
//     try {
//         const products = await Product.find(); // 4. Find Product from DB
//         res.status(200).json(products); // 5. Send Product Response
//     } catch (error) {
//         res.status(500).json({ message: error.message }); // 6. Send Error
//     }
// })


// // ----------------get single product by id-----------------------
// app.get('/api/product/:id', async (req, res) => {  // 3. Add Routes to get all products 
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id); // 4. Find Product from DB by ID 
//         res.status(200).json(product); // 5. Send Product Response
//     } catch (error) {
//         res.status(500).json({ message: error.message }); // 6. Send Error 
//     }
// })


// // ----------------add product-----------------------
// app.post('/api/products', async (req, res) => {    // 4. Add Product into DB //controller
//     try {
//         const product = await Product.create(req.body);  // 5. Create Product from Request saved in DB
//         res.status(200).json(product);  // 6. Send Product Response

//     } catch (error) {
//         res.status(500).json({ message: error.message }); // 7. Send Error
//     }

//     // console.log(req.body);
//     // res.send(req.body);
// })

// // ----------------end add product-----------------------


// // ----------------update product-----------------------


// app.put('/api/product/:id', async (req, res) => {

//     try {
//         const { id } = req.params; // 2. Get id from request to update data 

//         const product = await Product.findByIdAndUpdate(id, req.body); // 3. Find Product from DB by ID for update data from request 

//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         const UpdatedProduct = await Product.findById(id); // 4. Find Product from DB by ID before update to check updated data
//         res.status(200).json(UpdatedProduct);

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // ----------------end update product-----------------------


// // ----------------delete product-----------------------

// app.delete('/api/product/:id', async (req, res) => {

//     try {
//         const { id } = req.params; // 2. Get id from request to delete data

//         const product = await Product.findByIdAndDelete(id); // 3. Find Product from DB by ID for delete data from request

//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' }); // 4. Send Error
//         }
//         res.status(200).json({ message: 'Product deleted successfully' }); // 5. Send Success Response 
    
//     } catch (error) {
//         res.status(500).json({ message: error.message }); // 6. Send Error Response 
//     }
// });

// // ----------------end delete product-----------------------

// ----------------connect to DB-----------------------
//mongodb+srv://pulakkar85:wLWV1QdwQcXu4nX0@backenddb.fwvbaqq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB
mongoose.connect("mongodb://localhost:27017/pulok_db")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((e) => {
        console.log("connected error", e);
    });

