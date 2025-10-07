import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="Shopper Logo"/>
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagram_icon} alt="Instagram Icon" className="instagram-icon"/>
                </a>
            </div> 
            <div className="footer-icons-container">
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                    <img src={pintester_icon} alt="Pinterest Icon" className="pintester-icon"/>
                </a>
            </div> 
            <div className="footer-icons-container">
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp_icon} alt="WhatsApp Icon" className="whatsapp-icon"/>
                </a>
            </div> 
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - ALL Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
