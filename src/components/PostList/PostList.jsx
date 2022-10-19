
const PostList = (props) => {
    return ( 
        <div>
            {props.parentPosts.map((post) => 
                //render Post components here, give it the needed props
                //implicit return, don't need curly braces or 'return' keyword
                
            )}
        </div>
     );

}
 
export default PostList;

{/* <Post name='' color='' person='' /> */}