//Aca se renderizaran en vertical las {Cards} de tus seguidos, la {LowBar}, la {Feedbar} y el {Chatbar}
import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { GetFeed } from "../../Redux/Actions";
import Cards from "../Cards"

const Feed = () =>{
  const details = useSelector((state) => state.user)
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch();

  
  React.useEffect(() => {
      dispatch(GetFeed(details.follows))
  }, []);
  function compare( a, b ) {
    if ( a.date < b.date ){
      return -1;
    }
    if ( a.date > b.date ){
      return 1;
    }
    return 0;
  }
  posts.sort(compare)
  
    return(
    posts[0]?(<div className="PostList">
      { 
        posts.map((post) => 
          <Cards image={post.image} desc={post.desc} name={post.uploadername} profpic={post.pic} id={post.uploader} date={post.date}/>
        )
      }
    </div>) : console.log('ningun post', posts))
}
export default Feed;