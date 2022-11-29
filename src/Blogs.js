import allBlogs from './blogData.json';
import BlogList from './BlogList';
import { useState } from 'react';
function Blogs() {
const [blogs, setBlogs] = useState(allBlogs);
function deleteBlog(id) {
const newBlogs = blogs.filter(item => item.id !== id);
setBlogs(newBlogs);
}
return ( <div> <BlogList blogs={blogs} deleteBlog={deleteBlog} /></div> );
}

export default Blogs;
