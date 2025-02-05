import React, { useState, useEffect } from 'react';
import './Cart.css';

export const Cart = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: 'Product A', amt: 200, pic: 'https://www.app.tutorjoes.in/img/food/56.jpg' },
    { id: 2, name: 'Product B', amt: 250, pic: 'https://media.istockphoto.com/id/532607409/photo/chicken-wings.jpg?s=612x612&w=0&k=20&c=JKyzVvVvPIkGoAaN-dBHyrsyAVtB9Q1Mimv2SPv88Yk=' },
    { id: 3, name: 'Product C', amt: 400, pic: 'https://www.shutterstock.com/image-photo/fish-curry_seer-curry-traditional-indian-260nw-1910030440.jpg' },
  ]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items before placing an order.');
      return;
    }
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    setCart([]);
  };

  return (
    <div className="cart-container">
      <h2>Available Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.pic} alt={product.name} width={80} height={60} />
            <p>{product.name}</p>
            <p>Price: Rs {product.amt}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.pic} alt={item.name} width={80} height={60} />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>Price: Rs {item.amt}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="order-section">
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};
