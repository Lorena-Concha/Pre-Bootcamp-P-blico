const Product = require("../models/products.models");

module.exports.createNewProduct = (req, res) => {
    console.log(req.body)
    Product.create(req.body)
        .then((newProduct)=>res.json({product: newProduct}))
        .catch((err)=> res.json({message: "Algo salio mal", error: err}))
};
