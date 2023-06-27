import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            { error && <div className="center">{ error }</div>}
            {isPending && <div className="center">Loading...</div>}
            {blogs  && <BlogList blogs={blogs} title="All Blogs!"></BlogList>}
        </div>
    );
}
 
export default Home;