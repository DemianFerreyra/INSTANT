//Aca se renderizan los follows segun id
import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { GetFollows } from "../../Redux/Actions";

const Follows = () =>{
  const details = useSelector((state) => state.user)
  const followers = useSelector((state) => state.users)
  const dispatch = useDispatch();

  
  React.useEffect(() => {
      dispatch(GetFollows(details.followers))
  }, []);
  

    return(
    followers[0]?(<div className="FollowList">
      {
        followers.map((follow) => 
          <div className="Followelement">
           <img src={follow.profilePic}/>
           <Link style={{textDecoration: 'none', color: "black"}} to ={`/profile/${follow.id}`}> <h2>{follow.username}</h2> </Link> 
          </div>
        )
      }
    </div>) : console.log('nada', followers))
}
export default Follows;