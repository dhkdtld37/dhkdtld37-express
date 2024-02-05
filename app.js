const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	let myJson = { "Hello" : "World!" }
	res.json(myjSon)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

