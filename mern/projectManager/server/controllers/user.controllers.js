const User = require("../models/user.models");

module.exports.allUser = (req, res) => {
    console.log("estoy buscando todo");
    User.find()
        .then(allUser => res.json({allUser }))
        .catch(err => res.json({ message: "Algo salio mal", error: err }));
};

module.exports.userById = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(userById => res.json({userById }))
        .catch(err => res.json({ message: "Algo salio mal", error: err }));
};

module.exports.createNewUser = (req, res) => {
    console.log(req.body)
    User.create(req.body)
        .then((newUser)=>res.json({newUser}))
        .catch((err)=> res.json({message: "Algo salio mal", error: err}))
};

module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id},req.body,{new:true})
        .then((user)=>res.json({user: user}))
        .catch((err)=>res.json({message: "Algo salio mal", error: err}))
};

module.exports.deleteUser = (req, res) => {
    User.deleteOne({_id: req.params.id})
        .then((user)=>res.json({resultado: user}))
        .catch((err)=>res.json({message: "Algo salio mal", error: err}))
};
