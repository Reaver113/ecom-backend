const jwt = require('jsonwebtoken');

function auth(request, response, next) {
	let token = request.get("authorization")
	token = token?.split(" ")?.[1]
	if(!token) {
		return response.status(401).json({data: "Unauthenticated"})
	}
	try {
		const payload = jwt.verify(token, "secret")
		request.userId = payload.id
		next()
	} catch(err) {
		console.log(err)
		return response.status(401).json({data: "Unauthenticated"})
	}

}

module.exports = auth