const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB - SIMPLIFIED CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/mem_crud_blog')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// Create User Schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

// Create Product Schema
const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);

// ========== USER ROUTES ==========

// GET all users
app.get('/api/users', (req, res) => {
    User.find().then(item => {
        console.log(item);
        res.status(200).json({ message: 'Item fetched successfully', data: item });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    });
});

// GET single user
app.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    User.find({_id:id}).then(item => {
        console.log(item);
        res.status(200).json({ message: 'Item fetched successfully', data: item });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    });
});

// POST create user
app.post('/api/users', (req, res) => {
    const newUser = new User(req.body);
    console.log(newUser);
    newUser.save().then(item => {
        console.log(item);
        res.status(201).json({ message: 'Item added successfully' });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    });
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
        console.log(item);
        res.status(203).json({ message: 'Item Fetched Successfully', data:item });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    });
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id).then(item => {
        console.log(item);
        res.status(203).json({ message: 'Item Fetched Successfully', data:item });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    });
});

// ========== PRODUCT ROUTES ==========

// GET all products
app.get('/api/products', (req, res) => {
    Product.find().then(item => {
        console.log(item);
        res.status(201).json({ message: 'Products Fetched Successfully!', data: item });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    });
});

// GET single product
app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    Product.find({_id:id}).then(item => {
        console.log(item);
        res.status(200).json({ message: 'Item fetched successfully', data: item });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    });
});

// POST create product
app.post('/api/products', (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save().then(item => {
        console.log(item);
        res.status(201).json({ message: 'Item added successfully' });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    });
});

// PUT update product
app.put('/api/products/:id', (req, res) => {
    const { id } = req.params;
    Product.findByIdAndUpdate(id, req.body, { new: true }).then(item => {
        console.log(item);
        res.status(203).json({ message: 'Item Fetched Successfully', data:item });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    });
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    Product.findByIdAndDelete(id).then(item => {
        res.status(203).json({ message: 'Deleted Successfully' });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});