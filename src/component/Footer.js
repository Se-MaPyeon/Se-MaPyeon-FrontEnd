import React from 'react';
import '../assets/css/Footer.css';
import { FiGithub } from "react-icons/fi";
import { LuMail } from "react-icons/lu";

function Footer() {
 return (
   <footer className="footer">
     <div className="footer-content">
       <div className="contact-info">
         <p className="contact-title">Contact Team Se-Mapyeon</p>
         <div className="contact-item">
           <FiGithub style={{marginRight: '5px'}}/>
           <span className="contact-label">GIT:</span>
           <a href="https://github.com/Se-MaPyeon" target="_blank" rel="noopener noreferrer">https://github.com/Se-MaPyeon</a>
         </div>
         <div className="contact-item">
           <LuMail style={{marginRight: '5px'}}/>
           <span className="contact-label">E-Mail:</span>
           <a href="mailto:semapyeon@gmail.com">semapyeon@gmail.com</a>
         </div>
       </div>

       <div className="copyright">
        COPYRIGHT © SEJONG UNIVERSITY TEAM Se-MaPyeon
       </div>
     </div>
    </footer>
 );
}

export default Footer;