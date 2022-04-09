const JokeController = require("../controladores/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/", JokeController.allJokes);
    app.get("/api/jokes/:id", JokeController.jokeById);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
};
