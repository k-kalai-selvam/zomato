import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import plate from '../../assets/plate.png';

export const Header = () => {
  return (
    <>
    <div className='navbar'>
    <div className='logo'>
        <h1>zomato</h1>
    <ul>
        <li>
            <Link to={"/"}>Menu</Link>
        </li>
        <li>
            <Link to={"/Cart"}>View Cart</Link>
        </li>
    </ul>


    <div className="head">
            <h1>Fastest Delivery &</h1>
            <h2>Easy Pickup.</h2>
            <p>
              Order any meal at any time, and we will deliver it directly to
              your home.
            </p>
            <button>Make an Order</button>
            <img className="im" src={plate} alt="Food" />
          </div>

    </div>


</div>


        </>
  )
}
