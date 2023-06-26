const BlogList = ({blogs, title}) => {

    return (
        <div className="blog-list">
            <h2 className="center">{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.body}</p>
                    <h4>Written by: {blog.author}</h4>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;