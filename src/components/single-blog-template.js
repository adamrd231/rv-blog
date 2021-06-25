import React, { useEffect } from 'react';
import SecondaryMenu from './menus/secondary-menu';
import Footer from './footer';
// Import React SummerNote modules
// import RichTextEditor from './summernote';
const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

function SingleBlogTemplate(props) {

    const blog = props.location.state;
    console.log(blog)


    useEffect(() => {
        window.scrollTo(0, 0);
     
    }, []);

    let createdOn = formatDate(blog.blog.created_on)


    return (
        <div className="App single-page-blog-container">
            <SecondaryMenu /> 
            <div className="single-blog-container">
                
                <div className="single-page-blog">
                    <img className="singlePage-blog-image" src={blog.blog.blog_image}/>
                    <h1>{blog.blog.title}</h1>
                    
                    <p className="created-on">{createdOn}</p>
                    <p className="blog-text" dangerouslySetInnerHTML = {{ __html: blog.blog.blog }}></p>
                    <p className="blog-author">Adam Reed</p>
                </div>  
            </div>
            <Footer />
        </div>
        
       
    )

}

export default SingleBlogTemplate;