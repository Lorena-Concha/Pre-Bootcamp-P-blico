const ProductController = require("../controllers/product.controllers");

module.exports = app => {
    app.post("/api/product/new", ProductController.createNewProduct);
    app.get("/api/product", ProductController.getAllProducts);
    app.get("/api/product/:id", ProductController.getProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
};
