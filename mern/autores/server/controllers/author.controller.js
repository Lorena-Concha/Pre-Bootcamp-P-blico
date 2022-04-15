const Author = require("../models/author.models");

module.exports.createNewAuthor = (req, res) => {
    console.log(req.body)
    Author.create(req.body)
        .then((newAuthor)=>res.json({author: newAuthor}))
        .catch((err)=> res.status(500).send({error:"Su nombre debe tener mas de 3 caracteres"}));
};

module.exports.getAllAuthor = (req, res) => {
    console.log(req.body)
    Author.find({})
    .then(authors => res.json({authors}))
    .catch(err=> res.json({message: "No fue posible traer los autores",error: err}))
};

module.exports.getAuthor = (req,res) => {
    Author.findOne({_id:req.params.id})
    .then(author=> res.json(author))
    .catch(err => res.json(err))
}

module.exports.updateAuthor = (req,res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(err => res.json(err))
}

module.exports.deleteAuthor = (req,res) => {
    Author.deleteOne({_id:req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err))
}
