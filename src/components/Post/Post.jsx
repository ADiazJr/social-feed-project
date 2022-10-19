

const Post = (props) => {
    return (
            <div>
                <p>{props.author}</p>
                <p>{props.postText}</p>
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