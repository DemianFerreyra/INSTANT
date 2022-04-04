//Aca se renderizan los follows segun id
import React from "react";
import { Link } from "react-router-dom";
import * as users from "../ExampleData/users.ts";

function follows(){
    return(
    <div className="FollowList">
      {
        users.seferino.follows?.map(() => 
          <div className="Followelement">
           <img src={users.seferino.profilePic}/>
           <Link style={{textDecoration: 'none', color: "black"}} to ={`/profile/${users.seferino.id}`}> <h2>{users.seferino.username}</h2> </Link> 
          </div>
        )
      }
    </div>)
}
export default follows;