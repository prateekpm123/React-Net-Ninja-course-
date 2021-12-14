import { useState } from "react";
import Blog from "./Blog";

const NewBlogs = () => {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blogData = {title, body, author};
        console.log(blogData);

        setIsPending(true)
        
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blogData)
        }).then(() => {
            console.log("new Blog added");
            setIsPending(false)
            // setTitle("");
            // setBody('');
            // setAuthor('');
        });
        
    }

    return (
        <div className="content">
            <div className="create">
                <h2>
                    Add a new Blogs
                </h2>
                
                <form onSubmit={handleSubmit}>
                    <label>Blog Title</label>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                    <label>Blog Body</label>
                    <textarea 
                        type="text" 
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>

                    <label>Blog Author</label>
                    <select 
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    <div>{title}</div> 
                    <div>{body}</div> 
                    <div>{author}</div> 

                    { isPending && <button>Adding Blog...</button> }
                    { !isPending && <button>Add Blog...</button> }
                </form>
              

            </div>
       </div>
    );
}

export default NewBlogs;