//Aca se renderizan los follows segun id
import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { GetFollows, GetSelf } from "../../Redux/Actions";
import {Setfollow} from "../../Helpers/Helperfunctions"

const Follows = () =>{
  const self = useSelector((state) => state.selfuser)
  const details = useSelector((state) => state.user)
  const follows = useSelector((state) => state.users)
  const dispatch = useDispatch();

  
  React.useEffect(() => {
      dispatch(GetFollows(details.follows))
      dispatch(GetSelf(0))
  }, []);
  function handleclick(id){
    console.log(id)
    Setfollow(self.follows, details.followers, self.id, id)
  }

    return(
    follows[0]?(<div className="FollowList">
      <p>Cuentas a las que sigues</p>
      {
        follows.map((follow) => 
          <div className="Followelement">
           <img src={follow.profilePic}/>
           <Link style={{textDecoration: 'none', color: "black"}} to ={`/profile/${follow.id}`}> <h2>{follow.username}</h2> </Link> 
           <button onClick={() => handleclick(follow.id)}>dejar de seguir</button>
          </div>
        )
      }
    </div>) : console.log('nada', follows))
}
export default Follows;