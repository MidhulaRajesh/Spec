# 🔑 Default Login Credentials

## Admin Login
- **URL:** http://localhost:5173/admin-login
- **Email:** admin@gmail.com
- **Password:** Password123

## Test the Complete Workflow:

### 1. Register a Seller
- **URL:** http://localhost:5173/seller-register
- Fill in the form with test data
- Status will be: **PENDING**

### 2. Admin Approves Seller
- Login to admin dashboard
- Go to "Pending Sellers" tab
- Click "Approve" button

### 3. Seller Logs In
- **URL:** http://localhost:5173/seller-login
- Login with seller credentials
- Upload products

### 4. Customer Registration
- **URL:** http://localhost:5173/register
- Register as a customer
- Browse products

## API Endpoints (Backend Running on Port 5000)

✅ All endpoints are now working correctly!

### Authentication
- POST http://localhost:5000/api/auth/register
- POST http://localhost:5000/api/auth/login
- POST http://localhost:5000/api/seller/register
- POST http://localhost:5000/api/seller/login
- POST http://localhost:5000/api/admin/login

### Products
- GET http://localhost:5000/api/products
- GET http://localhost:5000/api/products/:id
- POST http://localhost:5000/api/products (seller auth required)
- GET http://localhost:5000/api/products/seller/my-products (seller auth required)

### Admin Dashboard
- GET http://localhost:5000/api/dashboard/stats
- GET http://localhost:5000/api/dashboard/customers
- GET http://localhost:5000/api/dashboard/products
- GET http://localhost:5000/api/dashboard/sellers
- GET http://localhost:5000/api/dashboard/sellers/pending
- PUT http://localhost:5000/api/dashboard/sellers/:id/approve
- PUT http://localhost:5000/api/dashboard/sellers/:id/reject

## ✅ Server Status
Backend: Running on http://localhost:5000
Database: Connected and synced
Tables: Created successfully (admins, sellers, customers, products)
