const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.route');
const Product = require('./models/product.models.js');
const app = express();

//middleware 
app.use(express.json());

//Routes

app.use('/api/products', productRoutes);

//racine

app.get('/', (req, res) => {
    
    res.send('Hello frOM api' );
});

//Obtenir tous les products
/*
app.get('/api/products', async (req, res) => {

    try {

        const products = await Product.find({});
        res.status(200).json(products);
        
    } catch (error) {
        res.status(500).json(error.message);
        
    }
});*/

//Obtenir un produit par son ID
/*
app.get('/api/products/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json(error.message);
    }
});*/

//Creer ou Enregistrer un Produit 
/*
app.post('/api/products', async (req, res) => { 
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
        res.send('nom :$(product.name)');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});*/

//mettre à jour un Produit 
/*
app.put('/api/products/:id', async (req, res) => {

   try {

    const {id} = req.params;
    
    const product = await Product.findByIdAndUpdate(
        id, req.body  
    );
    if(!product) {

       return res.status(404).json({message : 'Product not found'});
    }
    const updateProduct = await Product.findById(id);

    res.status(200).json(updateProduct);

    
   } catch (error) {
    res.status(500).json({ message: error.message });
   }

});*/

//Supprimer un Produit 
/*
app.delete('/api/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully'});

        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});*/
mongoose.connect('mongodb://localhost:27017/Backend-Api', {
   
})
.then(() => {
    console.log("Connecté à MongoDB");
    app.listen(3000, () => {
        console.log('Listening on port 3000');
    });
})
.catch((err) => {
    console.log("Connection échouée!", err);
});
