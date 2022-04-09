const Joke = require("../modelos/jokes.model.js");

module.exports.allJokes = (req, res) => {
    console.log("estoy buscando todo");
    Joke.find()
        .then(allJokes => res.json({ results: allJokes }))
        .catch(err => res.json({ message: "Algo salio mal", error: err }));
};

module.exports.jokeById = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(jokeById => res.json({ results: jokeById }))
        .catch(err => res.json({ message: "Algo salio mal", error: err }));
};

module.exports.createNewJoke = (req, res) => {
    console.log(req.body)
    Joke.create(req.body)
        .then((newJoke)=>res.json({joke: newJoke}))
        .catch((err)=> res.json({message: "Algo salio mal", error: err}))
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then((joke)=>res.json({joke: joke}))
        .catch((err)=>res.json({message: "Algo salio mal", error: err}))
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then((result)=>req.json({resultado: result}))
        .catch((err)=>res.json({message: "Algo salio mal", error: err}))
};



