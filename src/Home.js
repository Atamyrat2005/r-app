import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'Myrat', id: 1},
        {title: 'Welcome', body: 'lorem ipsum...', author: 'Maksat', id: 2},
        {title: 'Dev tools', body: 'lorem ipsum...', author: 'Myrat', id: 3},
    ]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"></BlogList>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Myrat')} title="Myrat's Blogs!"></BlogList>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Maksat')} title="Maksat's Blogs!"></BlogList>
        </div>
    );
}
 
export default Home;