import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";


function NewBlog(props) {
//slide mentions but we don't need props here
   // const navigate = useNavigate();
    const { title, setTitle } = useState('');
    const { body, setBody } = useState('');
    const { author, setAuthor } = useState('');
    const authorRef = useRef();
    const titleRef = useRef();
    const bodyRef = useRef();
    const history = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        const data = {
            title: titleRef.current.value,
            author: authorRef.current.value,
            body: bodyRef.current.value
        };
        addBlog(data);
    }

function addBlog(data) {
    fetch('http://localhost:4000/blogs', {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }

    }).then(() => { history('/') });
}
    return (

        <Card>

            <form onSubmit={submitHandler}>

                <label>Title</label> <input type="text" value={title} ref={titleRef} />

                <label>Author</label> <input type="text" value={author} ref={authorRef} />

                <label>Body</label> <input type="text" value={body} ref={bodyRef} />

                <button>Add blog</button>

            </form>

        </Card>

    );
}

export default NewBlog;
