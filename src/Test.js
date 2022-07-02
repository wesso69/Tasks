import { Link } from "react-router-dom";
const Test = (...props) => {
    const { blogs } = props;
return (
        <div className="blog-list">

            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/person_details/${blog.id}`}>
                            <h2>the  name is: {blog.first_name} {blog.middle_name} {blog.last_name}</h2>
                            <br />
                            <p>  ID:{blog.id}</p>
                            <br />
                            <p>email:{blog.email}</p>
                            <p>description:{blog.description}</p>
                        </Link>
                        {/* <button onClick={() => handleDelete(blogs.id)}> delete blog </button> */}
                    </div>
                );
            })}
        </div>
    );
  
}
export default Test;