//Aca se renderizaran en vertical las {Cards} de tus seguidos, la {LowBar}, la {Feedbar} y el {Chatbar}
import React from "react";
import { useDispatch } from 'react-redux'
import Crearusuario from "../../Helpers/Creadordeusuario"
import { createUser } from '../../Redux/Actions';
import images from "../ExampleData/cefe/Cefefotos.js";


const Feed = () =>{
  const user = {
    profilePic : images.foto0, 
    username : 'Gatonaranja', 
    bio : 'Gato color naranja', 
    posts : [{image : images.foto2, desc : 'zzz'}, {image : images.foto2, desc : 'zz otra vez'}], 
    follows : [2],
    followers: []
  }
  const dispatch = useDispatch()
      return (
       <div>
         <h1>Feed</h1>
         <button onClick={() => dispatch(createUser(user))}></button>
       </div>
      )
}
export default Feed;