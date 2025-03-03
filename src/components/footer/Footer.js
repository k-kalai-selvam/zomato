/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h1>Zomato</h1>
        <div className="footer-sub">
          <p>
            Comapany
            <ul className="list-one">
              <li>Who We Are</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Report Fradu</li>
              <li>Contact</li>
            </ul>
          </p>

          <p>
            For Foodies
            <ul className="list-two">
              <li>Code of Conduct</li>
              <li>Communty</li>
              <li>Blogger Help</li>
              <li>Developers</li>
              <li>Mobile Apps</li>
            </ul>
          </p>

          <p>
            For Restaurants
            <ul className="list-three">
              <li>Add Restaurants</li>
              <li>Claim Your Listing</li>
              <li>Business App</li>
              <li>Restaurants Widgets</li>
              <li>products For Business</li>
            </ul>
          </p>

          <p>
            For You
            <ul className="list-four">
              <li>Privacy</li>
              <li>Terems</li>
              <li>Security</li>
              <li>SiteMap</li>
            </ul>
          </p>

          <p>
            Social Links
            <div className="logo-one">
              <div
                style={{
                  display: "grid",
                  gap: "20px",
                  fontSize: "1.5rem",
                  padding: "20px",
                  margin: "0,10px",
                }}
              >
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaFacebook color="black" />
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaTwitter color="black" />
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaInstagram color="black" />
                </a>
              </div>
            </div>
          </p>
        </div>
      </div>
      <hr />
      <div className="copy">
        <div className="copy-sub">
          <h5>© 2024 Your Name. All rights reserved.</h5>

          <div className="para">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Contact with Me</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
