import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    return ( 
        <div className="blog-details">
            <article>
            {/* fetch is pending.. data is not retrieved yet */}
                { isPending && <div>Loading...</div>} 
            {/* fetch returns error */}
                { error && <div>{error}</div>}
            {/* fetch is complete and it returns data */}
                { blog && (
                    <article>
                        <h2>written by {blog.author}</h2>
                        <p>{blog.body}</p>
                    </article>
                )}
            </article>
        </div>
     );
}
 
export default BlogDetails;