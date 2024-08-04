const mongoose = require('mongoose');
const orderModel = require('../models/orderModel')
const productModel = require('../models/productModel');
//CREATE ORDER - /api/v1/order
exports.createOrder = async(req,res,next)=>{
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed(2);
    const status = 'pending';
    //if using a customvariable that is not like the property defined
    // wwe should use property:variable to tell the value which should be asigned

    //update quantity
    cartItems.forEach(async (item) => {
       const product =  await productModel.findById(item.product._id);
       product.stock = product.stock - item.qty;
       await product.save();
    });


    console.log(amount,'amount');
    const order = await orderModel.create({cartItems,amount,status});
    res.json(
        {
            success:true,
            order
        }
    )
}