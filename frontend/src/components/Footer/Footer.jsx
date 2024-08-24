import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const  Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} className="logo" alt='' />
            <p>Skip the cooking, enjoy the eating, Discover a world of flavors at your fingertips, Quality food, every time.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About-Us</li>
                <li> Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+237-674-418-672</li>
                <li>ngohremy04@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Food.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
