import { useState } from "react";
import './Post.css'


const Post = (props) => {

    const [likeClass, setLikeClass] = useState('neutral');
    const [dislikeClass, setDislikeClass] = useState('neutral')

    function handleClickLike(){
        setDislikeClass('neutral');
        if(likeClass === 'liked'){
            setLikeClass('neutral');
        }
        else{
            setLikeClass('liked');
        }
    }

    function handleClickDislike(){
        setLikeClass('neutral');
        if(dislikeClass === 'disliked'){
            setDislikeClass('neutral');
        }
        else{
            setDislikeClass('disliked')
        }

    }

    return (
            <div>
                <p>{props.author}</p>
                <p>{props.postText}</p>
                <button className={likeClass} onClick={handleClickLike}>Like</button>
                <button className={dislikeClass} onClick={handleClickDislike}>Dislike</button>  
            </div>
        )

}
 
export default Post;
// props.parentPosts.map((post) => {
//     return(
//         <div>
//         <p>{post.author}</p>
//         <p>{post.postText}</p>
//         </div>