import Product from "../Model/product.model.js";

export async function createProduct(req, res) {
    try {
        const productData = req.body;

        // Create a new Product document
        const product = new Product(productData);

        // Save to MongoDB
        const savedProduct = await product.save();

        res.status(201).json({
            message: 'Product saved successfully',
            data: savedProduct,
        });
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function fetchProducts(req, res){
    Product.find().then(data=>{
        if(!data){
            return res.status(400).send("something went wrong")
        }
        res.send(data);
    }).catch(error =>{
        console.error('Error saving product:', error);
        res.status(500).json({ message: 'Internal server error' });
    })
}

export async function fetchProductDetails(req, res) {
    try {
      const { id } = req.params;
  
      const product = await Product.findById(id);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json(product);
    } catch (error) {
      // Handle server errors
      console.error(error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
  
