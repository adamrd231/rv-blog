import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Footer() {
    return (
        <div id="footer" className="footer">
            <div className="footer-container">
                <div className="footer-row-1">
                    <div className="menu-link-container">
                        <HashLink to="#home" className="clickable"><h2 className="footer-link">HOME</h2></HashLink>
                        <HashLink to="#blogs" className="clickable"><h2 className="footer-link">BLOGS</h2></HashLink>
                        <HashLink to="#footer" className="clickable"><h2 className="footer-link">CONTACT</h2></HashLink>
                    </div>

                        <div className="flex-row">
                            <a href="https://www.instagram.com/adamrd231/"><img className="footer-icons" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/photos/insta-white.png" alt="Instagram"/>    </a>
                            <a href="https://www.instagram.com/adamrd231/"><img className="footer-icons" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/media/photos/insta-white.png" alt="Instagram"/>    </a>

                        </div>

                </div>
                        
                <div div className="footer-row-2">
                    <div className="footer-company-title">
                        
                    </div>
                    <div className="footer-company-links">
                        <div className="flex-row">
                            <h3>Newest Updates</h3>

                        </div>

                        <div>
                            <div className="flex-row">   
                                <div className="half-width">
                                    <p className="small-font">Thank you for visiting my website, I bet you thought there was some technical Terms of Service of Privacy Policy information here huh?</p>
                                </div>
                                
                                <div className="store-container-2">
                                    <input className="textArea" placeholder="Sign up for our newsletter"></input>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                    

                
            </div>

            <div className="footer-icon-container">
                <a href="mailto:someone@example.com"><p className="copyright-link">rdConcepts design.</p></a>
                <div className="flex-row">
                    <p className="copyright-link">Remote UI / UX Design. Web & Mobile Dev.</p>
                </div>
            </div>
  
            
        </div>
    )
}

export default Footer;