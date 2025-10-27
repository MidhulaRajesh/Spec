const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Customer } = require('../models');

const JWT_SECRET = 'your-secret-key-change-this-in-production';

// Register new customer
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        // Validate input
        if (!name || !email || !password || !phone) {
            return res.status(400).json({ message: 'All required fields must be filled' });
        }

        // Check if customer already exists
        const existingCustomer = await Customer.findOne({ where: { email } });
        if (existingCustomer) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new customer
        const customer = await Customer.create({
            name,
            email,
            password: hashedPassword,
            phone,
            address: address || ''
        });

        res.status(201).json({
            message: 'Registration successful',
            user: {
                id: customer.id,
                name: customer.name,
                email: customer.email,
                phone: customer.phone
            }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error during registration', error: error.message });
    }
});

// Login customer
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find customer
        const customer = await Customer.findOne({ where: { email } });
        if (!customer) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, customer.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: customer.id, email: customer.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: customer.id,
                name: customer.name,
                email: customer.email,
                phone: customer.phone,
                address: customer.address
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login', error: error.message });
    }
});

// Get customer profile (protected route)
router.get('/profile', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const customer = await Customer.findByPk(decoded.id, {
            attributes: ['id', 'name', 'email', 'phone', 'address']
        });

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        res.status(200).json({ user: customer });
    } catch (error) {
        console.error('Profile fetch error:', error);
        res.status(401).json({ message: 'Invalid or expired token' });
    }
});

module.exports = router;
