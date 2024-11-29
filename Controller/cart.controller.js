import Product from "../Model/product.model.js";
import Cart from "../Model/cart.model.js";

// Add a product to the cart
export async function addToCart(req, res) {
    try {
        const { productId, quantity } = req.body;

        // Validate product existence
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const cartItem = new Cart({ productId, quantity });
        const savedCartItem = await cartItem.save();

        res.status(201).json({
            message: "Product added to cart",
            data: savedCartItem,
        });
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Update cart item quantity
export async function updateCartItem(req, res) {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        const updatedCartItem = await Cart.findByIdAndUpdate(
            id,
            { quantity },
            { new: true }
        );

        if (!updatedCartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        res.status(200).json({
            message: "Cart item updated",
            data: updatedCartItem,
        });
    } catch (error) {
        console.error("Error updating cart item:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Remove a product from the cart
export async function removeCartItem(req, res) {
    try {
        const { id } = req.params;

        const deletedCartItem = await Cart.findByIdAndDelete(id);

        if (!deletedCartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        res.status(200).json({
            message: "Cart item removed",
        });
    } catch (error) {
        console.error("Error removing cart item:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
