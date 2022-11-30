//import allBlogs from './blogData.json';
import BlogList from './BlogList';
import { useState, useEffect } from 'react';

function Blogs() {
    const [blogs, setBlogs] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        fetch('http://localhost:4000/blogs')
            .then(res => { return res.json(); })
            .then(data => {
                setBlogs(data);
                setError(null);
                setIsLoading(false);
            })
            .catch(err => { setError(err.message); });

    }, []);
    
    function deleteBlog(id) {
        const newBlogs = blogs.filter(item => item.id !== id);
        setBlogs(newBlogs);
    }

    return (<div>
        {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog} />}
        {isLoading && <div>Wait... </div>}
        {error && <div> {error}</div>}
    </div>);
}

export default Blogs;
