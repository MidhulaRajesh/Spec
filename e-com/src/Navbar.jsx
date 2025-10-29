import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="logo">
                <FaShoppingCart style={{  paddingTop: '9px' }} /> SpecsCart
            </div>
            <ul className="navLinks">
                <li><NavLink to="/landingPage" className={({ isActive }) => isActive ? "link active" : "link"}>Home</NavLink></li>
                <li><NavLink to="/products" className={({ isActive }) => isActive ? "link active" : "link"}>Products</NavLink></li>
                <li><NavLink to="/orders" className={({ isActive }) => isActive ? "link active" : "link"}>Your Orders</NavLink></li>
                <li><NavLink to="/cart" className={({ isActive }) => isActive ? "link active" : "link"}>Cart</NavLink></li>
                <li><NavLink to="/contactus" className={({ isActive }) => isActive ? "link active" : "link"}>Contact Us</NavLink></li>
                <li><NavLink to="/login" className={({ isActive }) => isActive ? "link active" : "link"}>Logout</NavLink></li>
            </ul>
            <form className="searchForm">
                <input
                    type="text"
                    placeholder="Search..."
                    className="searchInput"
                />
                <button type="submit" className="searchButton">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;
