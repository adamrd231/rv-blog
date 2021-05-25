import React, { useState, useEffect } from 'react';
import reactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { API } from '../api-service';

function Blogs() {

    const MAX_LENGTH = 1000;
    const [ blogLoaded, SetBlogLoaded ] = useState(false);

    useEffect(() => {
        API.getBlogs().then( blogs => { SetBlogLoaded(blogs) })
    },[])

    if (blogLoaded) {
        return (
            <div id="blogs" className="home-page-blogs">        
                {/* BLog layout, pagination or choosing how many to display */}
                    { blogLoaded && blogLoaded.map( blog => {
                        return (
                    
                                <Link 
                                    className="blogs-link" 
                                    to={{
                                        pathname: "/blogs/" + blog.slug,
                                        state: {
                                            blog: blog
                                        }
                                    }}>
                                    <div key={blog.id} className="blogs-container clickable"></div>

                                        <img className="home-blog-image" src={blog.blog_image}/>
                                        <div className="blog-burb-container">
                                            <h2>{blog.title}</h2>
                                            <p>{blog.description}</p>
                                            <p>{blog.blog.substr(0,300) + "..."}</p>
                                            <p>Click to read more.</p>
                                        </div>      
                                </Link>
                           
                        )
                    })}

                

            </div>
            )
    } else {
        return (
            <div id="blogs" className="home-page-blogs">
                <p className="loading-graphic">Loading Blogs...</p>
            </div>
        )
        
    }
    
  
}

export default Blogs;