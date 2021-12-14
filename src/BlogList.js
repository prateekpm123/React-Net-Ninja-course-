import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    // console.log(blogs) 
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                    <div className="preview-content" key={blog.id}>
                        {/* { console.log(blog.author)} */}
                        <Link to={`/blog/${blog.id}`}>
                            <h3>{blog.title }</h3> 
                            <p>Author is {blog.author}</p>
                        </Link>
                       {/* <button onClick={() => handleDelete(blog.id)}>Delete the fucking blog</button> */}
                    </div>  
                )   
            )} 
        </div>
        
    );
}
 
export default BlogList;