//Aca se renderizaran en vertical las {Cards} de tus seguidos, la {LowBar}, la {Feedbar} y el {Chatbar}
import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { GetFeed, getUser } from "../../Redux/Actions";
import Cards from "../Cards"
import Crearusuario from "../../Helpers/Creadordeusuario";

const Feed = () =>{
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch();

  
  React.useEffect(() => {
     fetch('http://localhost:3001/profiles/0')
     .then(res => res.json())
     .then(data => {
      dispatch(GetFeed(data.follows))
     })
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
    return(posts[0]?(<div> 
      { 
        posts.map((post) => 
          <Cards image={post.image} desc={post.desc} name={post.uploadername} profpic={post.uploaderpic} id={post.uploaderid} date={post.date}/>
        )
      }
    </div>) : console.log('ningun post', posts))
}
export default Feed;