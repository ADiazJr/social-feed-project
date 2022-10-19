import { useState } from "react";

const CreatePostForm = (props) => {

    const [author, setAuthor] = useState('');
    const [postText, setPostText] = useState('');

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        let newPost = {
            author: author,
            postText: postText,
        }
        props.addNewPost(newPost)

    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type={'text'} onChange={(space) => setAuthor(space.target.value)} value={author} />
            <label>Post</label>
            <input type={'text'} onChange={(space) => setPostText(space.target.value)} value={postText} />
            <button type="submit">Create</button>
        </form>
     );
}
 
export default CreatePostForm;