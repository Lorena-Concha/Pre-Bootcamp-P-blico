const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authordb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log("conectado"))
.catch((err) => console.log("no conectado", err));
mongoose.connection.on('error',err =>{
    console.log(err)
})