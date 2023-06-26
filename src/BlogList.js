// second method

const BlogList = ({blogs, title}) => {

    // second method end

    // first method start

// const BlogList = (props) => {
    // const blogs = props.blogs;
    // const title = props.title;

    // first method end

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;