import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('Blog deleted')
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div className="center">Loading...</div>}
            {error && <div className="center">{error}</div>}
            {blog && (
                <article>
                    <div className="between">
                        <h2 className="">{blog.title}</h2>
                        <button onClick={handleClick}>Delete</button>
                    </div>
                    <p>{blog.body}</p>
                    <h4>Written by: {blog.author}</h4>

                </article>
            )}
        </div>
    );
}

export default BlogDetails;