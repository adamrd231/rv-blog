import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Footer() {
    return (
        <div id="footer" className="footer">
            <div className="footer-container">

                <div className="footer-row-menu">
                    <HashLink to="#home" className="clickable"><h2 className="footer-link">HOME</h2></HashLink>
                    <HashLink to="#blogs" className="clickable"><h2 className="footer-link">BLOGS</h2></HashLink>
                    <HashLink to="#footer" className="clickable"><h2 className="footer-link">CONTACT</h2></HashLink>
                </div>
                        
                <div div className="footer-row-text">
                    <p className="small-font">Thank you for visitng our website, we try to update often but sometimes we do not have access to the internets.</p>
                </div>
                <div className="footer-info flex-row">
                    <div className="footer-info-container">
                        <h3>Email</h3>
                        <p>thervemail@email.com</p>
                    </div>
                    <div className="footer-info-container">
                        <h3>About us</h3>
                        <p>Full time RV since March 2021</p>
                    </div>
                </div>
                <div>
                    <h3>Designed and Developed by rdConcepts</h3>
                </div>

                
     
            </div> 

        </div>
    )
}

export default Footer;