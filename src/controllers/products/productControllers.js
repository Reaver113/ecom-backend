const Product = require("../../models/product")
const products = [
	{
		title: "Bag",
		description: "Bag for all occasions",
		price: 42,
		stock: 10,
	},
	{
		title: "Ring",
		description: "Wedding Ring",
		price: 4200,
		stock: 5,
	},
	{
		title: "Wallet",
		description: "Wallet for all occasions",
		price: 420,
		stock: 15,
	},
]

async function getProducts() {
	const products = await Product.find()
	return products
}

async function getProductById(productId) {
	try {
		const product = await Product.findById(productId)
		return product
	} catch(err) {
		console.log(err)
	}
}

async function createProduct(product) {
	const newProduct = await Product.create(product)
	return newProduct
}

module.exports = {
	getProducts,
	getProductById,
	createProduct,
}