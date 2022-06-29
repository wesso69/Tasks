const BlogList = ({ ...props }) => {

    const { blogs } = props;

    return (
        <div className="blog-list">

            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>the name is: {blog.name}</h2>
                        <br />
                        <p>  ID:{blog.id}</p>
                        <br />
                        <p>Status:{blog.email}</p>
                        {/* <button onClick={() => handleDelete(blogs.id)}> delete blog </button> */}
                    </div>
                );
            })}
        </div>
    );
}
export default BlogList;