# 🎯 How to Run the Application

## Prerequisites Check
✅ MySQL installed and running
✅ Node.js installed
✅ Both frontend and backend dependencies installed

## Step-by-Step Instructions

### 1️⃣ Create MySQL Database
Open MySQL Command Line or MySQL Workbench and run:
```sql
CREATE DATABASE ecommerce_db;
```

### 2️⃣ Create Admin Account
Open terminal in `e-com-backend` folder:
```bash
npm run create-admin
```

You'll see:
```
✅ Admin account created successfully!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email: admin@ecommerce.com
Password: admin123
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 3️⃣ Start Backend Server
In the same terminal:
```bash
npm run dev
```

You should see:
```
Server is running on http://localhost:5000
Database connection has been established successfully.
All models were synchronized successfully.
```

### 4️⃣ Start Frontend (New Terminal)
Open a NEW terminal window and navigate to `e-com` folder:
```bash
cd e-com
npm run dev
```

You should see:
```
VITE ready in XXX ms
➜  Local:   http://localhost:5173/
```

### 5️⃣ Access the Application

#### For Testing the Workflow:

**Step A: Admin Login**
1. Open browser: http://localhost:5173/admin-login
2. Login with:
   - Email: admin@ecommerce.com
   - Password: admin123
3. You'll see the admin dashboard

**Step B: Seller Registration Request**
1. Open new tab: http://localhost:5173/seller-register
2. Fill the form:
   - Name: Test Seller
   - Email: seller@test.com
   - Password: seller123
   - Confirm Password: seller123
   - Phone: 1234567890
   - Business Name: Test Business
3. Click "Submit Request"
4. You'll see: "Registration request submitted successfully!"

**Step C: Admin Approves Seller**
1. Go back to admin dashboard tab
2. Click "Pending Sellers (1)" tab
3. You'll see the seller request
4. Click "Approve" button
5. Seller status changes to "approved"

**Step D: Seller Login & Upload Product**
1. Open new tab: http://localhost:5173/seller-login
2. Login with:
   - Email: seller@test.com
   - Password: seller123
3. You'll see seller dashboard
4. Click "+ Add Product"
5. Fill product details:
   - Name: Sample Product
   - Description: Great product
   - Price: 999
   - Brand: Test Brand
   - Stock: 10
   - Image: (optional - select an image)
6. Click "Add Product"
7. Product appears in the list

**Step E: View Products as Customer**
1. Open new tab: http://localhost:5173/products
2. You'll see the product you just added!
3. Only products from approved sellers are shown

**Step F: Customer Registration**
1. Go to: http://localhost:5173/register
2. Create a customer account
3. Login and shop!

## 🎨 All Available Pages

### Customer Pages
- http://localhost:5173/ (Login)
- http://localhost:5173/register
- http://localhost:5173/products
- http://localhost:5173/cart
- http://localhost:5173/orders

### Seller Pages
- http://localhost:5173/seller-register
- http://localhost:5173/seller-login
- http://localhost:5173/seller-dashboard

### Admin Pages
- http://localhost:5173/admin-login
- http://localhost:5173/admin-dashboard

## 🔧 Troubleshooting

### Database Connection Error
- Make sure MySQL is running
- Verify database `ecommerce_db` exists
- Check credentials in `e-com-backend/config/database.js`

### Port Already in Use
**Backend (5000):**
```bash
# Find and kill process using port 5000
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F
```

**Frontend (5173):**
```bash
# Find and kill process using port 5173
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F
```

### CORS Errors
- Ensure backend is running on port 5000
- Ensure frontend is calling http://localhost:5000

### Image Upload Not Working
- Check if `uploads` folder exists in `e-com-backend`
- Verify file size is under 5MB

## 📞 Support

If you encounter any issues:
1. Check both terminals for error messages
2. Verify MySQL is running
3. Ensure all dependencies are installed
4. Check that both servers are running

## ✅ Success Indicators

You'll know everything is working when:
- ✅ Backend shows: "Server is running on http://localhost:5000"
- ✅ Backend shows: "Database connection has been established successfully"
- ✅ Frontend shows: "Local: http://localhost:5173/"
- ✅ Admin can login
- ✅ Seller can request registration
- ✅ Admin can see and approve seller request
- ✅ Approved seller can login
- ✅ Seller can upload products
- ✅ Products appear on products page

Happy Testing! 🚀
