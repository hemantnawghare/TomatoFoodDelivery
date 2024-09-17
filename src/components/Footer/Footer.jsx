import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>aobuevlkn oi;ahr oiaHRG AIOREH GAE GRAGR EG AEGRA0E9RG AER8 GAEGR EYRG A/G AEGI</p>
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
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Primary Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1234567890</li>
                    <li>Support@123.com</li>
                </ul>
            </div>   
        </div>
        <hr />
        <p className="footer-copyright">
            Cpoyright 2024 - All Rights are Reserved
        </p>
    </div>
  )
}

export default Footer