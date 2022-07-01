import { useState, useEffect } from "react";
import BlogList from "../BlogList";
import useFetch from "../hooks/useFetsh";
import PersonDetails from "../Persondetails";
import Test from "../Test";


const Home = () => {
     const {data:blogs,loading,error} =useFetch('http://icloudjo.com:8050/REST/persons');
    return (
        <div className="home">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title=" all persons" />}
            {/* {blogs && <Test blogs={blogs} />}  */}
            {/* <BlogList  blogs={blogs.filter((blog)=> blog.completed === false)} title=" blogs with completed "/> */}
        </div>
    );
}
export default Home;