//Aca se renderiza la {LowBar}, en grid las {Cards} de recomendados y la {SearchBar}
import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { GetAllPosts, GetFeed } from "../../Redux/Actions";
import Cards from "../Cards"
import { compare } from "../../Helpers/Helperfunctions";

const Feed = () =>{
  const posts = useSelector((state) => state.recoposts)
  const dispatch = useDispatch();
  
  React.useEffect(() => {
      dispatch(GetAllPosts(0))
  }, []);
  posts.sort(compare)
    return(posts[0]?(<div className="Recommended"> 
      { 
        posts.map((post) => 
          <Cards image={post.image} desc={post.desc} name={post.uploadername} profpic={post.uploaderpic} id={post.uploaderid} date={post.date}/>
        )
      }
    </div>) : console.log('ningun post', posts))
}
export default Feed;