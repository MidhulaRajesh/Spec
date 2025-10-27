const sequelize = require('../config/database');
const Customer = require('./Customer');
const Product = require('./Product');
const Admin = require('./Admin');
const Seller = require('./Seller');

// Define relationships
Seller.hasMany(Product, { foreignKey: 'sellerId', as: 'products' });
Product.belongsTo(Seller, { foreignKey: 'sellerId', as: 'seller' });

// Sync all models with database
const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Error synchronizing models:', error);
    }
};

module.exports = {
    sequelize,
    Customer,
    Product,
    Admin,
    Seller,
    syncDatabase
};
