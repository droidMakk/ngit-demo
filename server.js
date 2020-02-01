const app = require('express')();

app.get('/',(req, res) => {
		res.send("Ya I'm online...");
})

app.listen(80,() => {
		console.info("APP STARTED");
})
