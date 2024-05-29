const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(  // 1. Create Schema for Product Model 
    {
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        quantity: {
            type: Number,
            required: [true, 'number is required'],
            default: 0
        },
        image: {
            type: String,
            required: false
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        description: {
            type: String
        }
    },
    {
        timestamps: true
    }

);

const Product = mongoose.model('Product', productSchema);
module.exports = Product