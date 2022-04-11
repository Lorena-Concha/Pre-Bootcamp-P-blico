const Product = require("../models/products.models");

module.exports.createNewProduct = (req, res) => {
    console.log(req.body)
    Product.create(req.body)
        .then((newProduct)=>res.json({product: newProduct}))
        .catch((err)=> res.json({message: "Algo salio mal", error: err}))
};

module.exports.getAllProducts = (req, res) => {
    console.log(req.body)
    Product.find({})
    .then(products => res.json({products}))
    .catch(err=> res.json({message: "No fue posible traer los productos",error: err}))
};

module.exports.getProduct = (req,res) => {
    Product.findOne({_id:req.params.id})
    .then(product=> res.json(product))
    .catch(err => res.json(err))
}

module.exports.updateProduct = (req,res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.json(err))
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id:req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err))
}
