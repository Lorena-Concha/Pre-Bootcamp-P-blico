const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new

const AllAuthors = require ("./routes/author.routes");
AllAuthors(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})