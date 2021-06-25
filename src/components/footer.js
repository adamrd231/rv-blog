import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Footer() {
    return (
        <div id="footer" className="footer">

                <div className="footer-left">
                    <h2>Menu</h2>
                    <HashLink to="#home" className="clickable"><h3 className="footer-link">HOME</h3></HashLink>
                    <HashLink to="#blogs" className="clickable"><h3 className="footer-link">BLOGS</h3></HashLink>
                    <HashLink to="#footer" className="clickable"><h3 className="footer-link">CONTACT</h3></HashLink>
                </div>

                <div className="footer-right">
                    <div div className="footer-text">
                        <h2>Becky and Me, in the RV.</h2>
                        <p className="small-font">Thank you for visitng our website, we try to update often but sometimes we do not have access to the internets.</p>
                    </div>
                    <div className="footer-email">
                        <div className="footer-info-container">
                            <h3>Email</h3>
                            <p>thervemail@email.com</p>
                        </div>
                        <div className="footer-info">
                            <h3>About us</h3>
                            <p>Full time RV since March 2021</p>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <h3>Designed and Developed by rdConcepts</h3>
                    </div>
                </div>     
                
        </div>
    )
}

export default Footer;