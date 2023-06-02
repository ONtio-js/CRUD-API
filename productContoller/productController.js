const product = require('../productModel/productModel');

async function findAll(req, res){
    try{
        const products = await product.find({});
        if(products.length > 0){
            res.status(200).json(products);
        }else{
            res.status(404).json({message:"Products not found"});
        }
     
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

async function findById(req, res){
   try {
    const id = req.params.id;
    const singleProduct = await product.findOne({_id:id});
    if(singleProduct){
            res.status(200).json(singleProduct);
        }else{
            res.status(404).json({message:"Product not found"});
        }
   } catch (error) {
    res.status(500).json({error: error.message});
   }
}

async function createProduct(req, res){
    try{
        const newproduct = req.body;
        const savedProduct = await product.create(newproduct);
        res.status(201).json(savedProduct);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

async function updateProduct(req, res){
    try{
        const id = req.params.id;
        const updateProduct = req.body;
        const updatedProduct = await product.findByIdAndUpdate({_id:id}, updateProduct);
        res.status(200).json(updatedProduct);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

async function deleteProduct(req, res){
    try{
        const id = req.params.id;
        const deletedProduct = await product.findByIdAndDelete({_id:id});
        res.status(200).json(deletedProduct);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}
module.exports = { findAll, findById, createProduct, updateProduct, deleteProduct} 