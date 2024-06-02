const Product = require('../models/product.model.js'); // 0. Import Model


const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);  // 5. Create Product from Request saved in DB
        res.status(200).json(product);  // 6. Send Product Response 

    } catch (error) {
        res.status(500).json({ message: error.message }); // 7. Send Error
    }
}


const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find(); // 4. Find Product from DB
        res.status(200).json(products); // 5. Send Product Response 

    } catch (error) {
        res.status(500).json({ message: error.message }); // 6. Send Error
    }
}


const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id); // 4. Find Product from DB by ID 
        res.status(200).json(product); // 5. Send Product Response

    } catch (error) {
        res.status(500).json({ message: error.message }); // 6. Send Error  
    }
}


const updateProduct = async (req, res) => {
    try {
        const { id } = req.params; // 2. Get id from request to update data 

        const product = await Product.findByIdAndUpdate(id, req.body); // 3. Find Product from DB by ID for update data from request

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const UpdatedProduct = await Product.findById(id); // 4. Find Product from DB by ID before update to check updated data
        res.status(200).json(UpdatedProduct);   

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params; // 2. Get id from request to delete data

        const product = await Product.findByIdAndDelete(id); // 3. Find Product from DB by ID for delete data from request

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' }); // 4. Send Response

    } catch (error) {
        res.status(500).json({ message: error.message }); // 5. Send Error
    }
}


module.exports = { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct }