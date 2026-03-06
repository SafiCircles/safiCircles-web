import React from 'react';
import './Footer.css';
import { image } from '../../constants/images';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={image.safiLogo} alt="SafiCircles Logo" />
          </div>
          <p className="copyright">
            © 2026 - Present<br />
            All rights Reserved
          </p>
          <div className="qr-code">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SafiCircles" alt="QR Code" />
            <span>Use SafiCircles on another device</span>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links-wrapper">
          <div className="footer-links-col">
            <h4>COMPANY</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Team</a>
          </div>

          <div className="footer-links-col">
            <h4>RESOURCES</h4>
            <a href="#">GDPR</a>
            <a href="#">Support</a>
            <a href="#">Blog</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

          <div className="footer-links-col">
            <h4>DEVELOPERS</h4>
            <a href="#">API</a>
            <a href="#">Vulnerability Disclosure</a>
          </div>
        </div>

      </div>

      {/* Decorative lines and circles matching the design */}
      <div className="footer-deco-curve"></div>
      <div className="footer-semicircle"></div>
      <div className="footer-deco-node"></div>
    </footer>
  );
};

export default Footer;
