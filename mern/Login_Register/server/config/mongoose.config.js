const mongoose = require("mongoose");

mongoose.connect(process.env.DB_LINK, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("DB is Working"))
	.catch(err => console.log("Something is wrong", err));