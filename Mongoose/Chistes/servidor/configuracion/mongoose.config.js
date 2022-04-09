const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/my_first_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log("conectado"))
.catch((err) => console.log("no conectado", err));
mongoose.connection.on('error',err =>{
    console.log(err)
})
