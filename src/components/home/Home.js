import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../assets/products.json'; 
import './Home.css';

export const Home = () => {
  const [products] = useState(data);  
  const [cart, setCart] = useState([]); 
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
    alert(`${product.name} added to cart!`);
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  return (
    <>
      <div className="container">
        <div className="container-sub">
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.pic} alt={product.name} width={200} height={150} />
              <h3>{product.name}</h3>
              <p>Price Rs: {product.amt}</p>
              <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* View Cart Button */}
      <div className="view-cart">
        {/* <button onClick={handleViewCart}>View Cart 🛒</button> */}
      </div>
    </>
  );
};
