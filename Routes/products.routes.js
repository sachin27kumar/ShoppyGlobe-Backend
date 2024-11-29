import { createProduct, fetchProducts, fetchProductDetails } from '../Controller/products.controller.js';
import { addToCart, updateCartItem, removeCartItem } from "../Controller/cart.controller.js";
import { register, login } from "../Controller/auth.controller.js";
import { authenticate } from "../Middlewares/authMiddlewares.js";

export function routes(app) {
    // Authentication routes
    app.post("/api/register", register);
    app.post("/api/login", login);

    // Product routes
    app.post("/api/product", createProduct);
    app.get("/api/products", fetchProducts);
    app.get("/api/products/:id", fetchProductDetails);

    // Protected cart routes
    app.post("/api/cart", authenticate, addToCart);
    app.put("/api/cart/:id", authenticate, updateCartItem);
    app.delete("/api/cart/:id", authenticate, removeCartItem);
}
