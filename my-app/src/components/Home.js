import { useState, useEffect } from "react";
import BlogList from "../BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blogs = blogs.id !== id)
        setBlogs(newBlogs);
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
    }), [],10000;
    return (
        <div className="home">
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title=" all blogs" />}
            {/* <BlogList  blogs={blogs.filter((blog)=> blog.completed === false)} title=" blogs with completed "/> */}
        </div>
    );
}
export default Home;