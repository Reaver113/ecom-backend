const mongoose = require("mongoose")

const CartProductSchema = new mongoose.Schema({
	prodcut_id: String,
	quantity: Number,
})

const CartSchema = new mongoose.Schema({
	user_id: String,
	products: [CartProductSchema],
})

const Cart = mongoose.model("Cart", CartSchema)

module.exports = Cart