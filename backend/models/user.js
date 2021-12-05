const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    passwordHash: String,
    street: String,
    apartment: String,
    city: String,
    zip: String,
    country: String,
    phone: String,
    isAdmin: Boolean
})

module.exports = userSchema;
