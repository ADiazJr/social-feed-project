import Post from "../Post/Post";

const PostList = (props) => {
    return ( 
        <div className="list-flex">
            {props.parentPosts.map((post) => 
                //render Post components here, give it the needed props
                //implicit return, don't need curly braces or 'return' keyword
                <Post author={post.author} postText={post.postText} />
            )}
        </div>
     );

}
 
export default PostList;