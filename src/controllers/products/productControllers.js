const Product = require("../../models/product")


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

async function deleteProduct(productId) {
	const deletedProduct = await Product.findByIdAndDelete(productId)
	return deletedProduct
}

module.exports = {
	getProducts,
	getProductById,
	createProduct,
	deleteProduct,
}