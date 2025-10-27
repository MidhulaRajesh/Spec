

import React from "react";
import { useCart } from "./CartContext";
import Navbar from "./Navbar";
import cartempty from "./cartempty.png";

import './OrderPage.css';

function OrdersPage() {
    const { orders } = useCart();

    return (
        <>
            <Navbar />
            <div className="order-page-container">
                <h2 className="order-header">Your Orders</h2>
                {(!orders || orders.length === 0) ? (
                    <div className="order-items" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
                        <img src={cartempty} alt="No orders" style={{ width: '180px', marginBottom: '1rem', opacity: 0.85 }} />
                        <p className="item-name" style={{ fontSize: '1.2rem', color: '#888', fontWeight: 500, textAlign: 'center' }}>You have not placed any orders yet.<br/>Start shopping and your orders will appear here!</p>
                    </div>
                ) : (
                    <div className="order-items" style={{ display: 'flex', justifyContent: 'center', gap: '18px' }}>
                        {[...orders]
                            .sort((a, b) => (b.price || 0) - (a.price || 0))
                            .map((item, idx) => (
                            <div key={idx} className="order-item" style={{ minWidth: 320, maxWidth: 420, margin: '0 12px', justifyContent: 'flex-start' }}>
                                <div className="item-details">
                                    <img src={item.image} alt={item.name} className="item-image" />
                                    <div>
                                        <div className="item-name">{item.name}</div>
                                        <div className="item-qty">Quantity: {item.quantity || 1}</div>
                                    </div>
                                </div>
                                <div className="item-price">₹{item.price}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default OrdersPage;
