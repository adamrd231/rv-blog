import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Menu() {

    return (
       <div className="menu-container">
            <Link to="/" className="menu-item link clickable">Home</Link>
            <HashLink to="#blogs" className="menu-item link clickable">Blogs</HashLink>
            <HashLink to="#footer" className="menu-item link clickable">Contact</HashLink>
            <a className="flex-row" href="https://www.instagram.com/adamrd231/">
                <p>Adam's</p><img className="icon link" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/insta-clean.png" alt="Instagram"/>    
            </a>
            <a className="flex-row" href="https://www.instagram.com/heyybeckss/">
                <p>Becky's</p><img className="icon link" src="https://portfolio-website-adamrd231.s3-us-west-1.amazonaws.com/insta-clean.png" alt="Instagram"/>    
            </a>

       </div>
        
    )
}

export default Menu;