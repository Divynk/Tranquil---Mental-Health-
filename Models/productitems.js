const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const { object } = require('joi');

const productSchema=new Schema({
    image: String,
    title: String,
    company: String, 
    cutprice :Number,
    price: Number,
    quantity: {type:Number, min: [1, 'Too few items']},
    stock: {type:Number, min: [1, 'Stock over'], max: 1000},
});
module.exports=mongoose.model('Product',productSchema);