import { useParams } from "react-router-dom";
import useFetch from "./hooks/useFetsh";

const PersonDetails = () => {
const {id} = useParams();
const {data:blog,error,loading} =useFetch('http://icloudjo.com:8050/REST/persons/'+id);
    return (
    <div className="person-details"> 
           {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && 
            <article>
                <h2> persons {blog.id} </h2>
                <h2>the  name is: {blog.first_name} {blog.middle_name} {blog.last_name}</h2>
                <br />
                <p>  ID:{blog.id}</p>
                <br />
                <p>email:{blog.email}</p>
                <p>description:{blog.description}</p>
            </article>
            }
    </div>
    );
  
};

export default PersonDetails;
// // const BlogList = ({ ...props }) => {

//     const { blogs } = props;

//     return (
//         <div className="blog-list">

//             {blogs.map((blog) => {
//                 return (
//                     <div className="blog-preview" key={blog.id}>
//                         <Link to={`/person_details/${blog.id}`}>
//                             <h2>the  name is: {blog.first_name} {blog.middle_name} {blog.last_name}</h2>
//                             <br />
//                             <p>  ID:{blog.id}</p>
//                             <br />
//                             <p>email:{blog.email}</p>
//                             <p>description:{blog.description}</p>
//                         </Link>
//                         {/* <button onClick={() => handleDelete(blogs.id)}> delete blog </button> */}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }
// export default BlogList;