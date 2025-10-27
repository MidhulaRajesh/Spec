
import React from "react";
import Navbar from "./Navbar";
import "./LandingPage.css";


const categories = [
    "Mobiles",
    "Fashion",
    "Electronics",
    "Groceries",
    "Furniture",
    "Books",
    "Beauty",
];

const LandingPage = () => {
    return (
        <>
            <div style={{
                minHeight: '100vh',
                
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <Navbar />

                {/* Hero Section */}
                <div className="hero" style={{ borderRadius: '0 0 32px 32px', paddingBottom: '2rem' }}>
                    <h1>Welcome to ShopZone</h1>
                    <p>Get amazing deals on top products!</p>
                    <button
                        className="hero-btn"
                        onClick={() => window.location.href = "/products"}
                    >
                        Shop Now
                    </button>
                </div>

                {/* Category Grid */}
                <section className="category-section">
                    <h2>Shop by Category</h2>
                    <div className="category-grid">
                        {categories.map((category, index) => (
                            <div
                                className="category-card"
                                key={index}
                                onClick={() => window.location.href = "/products"
                                }
                            >
                                
                                <p>{category}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 ShopZone. All rights reserved.</p>
            </footer>
        </>
    );
};

export default LandingPage;
