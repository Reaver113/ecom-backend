const carts = [
	{
		user_id: 1,
		products: [
		{
			product_id: 1,
			quantity: 2,
		},
		{
			product_id: 2,
			quantity: 5,
		}
		]
	},
	{
		user_id: 2,
		products: [
		{
			product_id: 0,
			quantity: 4,
		},
		{
			product_id: 3,
			quantity: 12,
		}
		]
	}
]

function getCarts() {
	return carts
}

function getCartById(cartId) {
	const cart = carts[cartId]
	return cart
}

function getCartByUserId(userId) {
	const cartByUserId = carts.find((cart) => cart.user_id == userId)
	return cartByUserId
}

module.exports = {
	getCarts,
	getCartById,
	getCartByUserId
}