const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());

require ("./configuracion/mongoose.config");
const AllJokesRoutes = require ("./rutas/jokes.routes");
AllJokesRoutes(app);

app.listen(port,()=>console.log("Escuchando puerto: " + port));



