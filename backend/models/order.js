const mongoose = require('mongoose');
const User = require("./user");
const OrderItem = require('./orderItem');

const orderSchema = mongoose.Schema({
    orderItems: OrderItem,
    shippingAddress1: String,
    shippingAddress2: String,
    city: String,
    zip: String,
    country: String,
    phone: Number,
    status: String,
    totalPrice: Number,
    user: User,
    dateOrdered: Date
})

module.exports = orderSchema;
