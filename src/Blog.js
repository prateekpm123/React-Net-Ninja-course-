import { useParams } from "react-router";
import useFetch from "./useFetch";

const Blog = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);

    return (
        <div className="content">
            {isPending && <div>Loading ...</div>  }
            {error && <div>{error} </div>}
            <h2>
                {blog && blog.title}
            </h2>
            <br />
            <div className="blog-content">
                <p>
                    {blog && blog.body}
                </p>
            </div>
            <br />
            <h4>
                <p>
                    Author - {blog && blog.author}
                </p>
            </h4>
        </div>
    );
}
 
export default Blog;

// import { useParams } from "react-router-dom";
// import useFetch from "./useFetch";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

//   return (
//     <div className="blog-details">
//       { isPending && <div>Loading...</div> }
//       { error && <div>{ error }</div> }
//       { blog && (
//         <article>
//           <h2>{ blog.title }</h2>
//           <p>Written by { blog.author }</p>
//           <div>{ blog.body }</div>
//         </article>
//       )}
//     </div>
//   );
// }
 
// export default BlogDetails;