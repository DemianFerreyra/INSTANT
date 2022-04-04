//Aca se renderizaran en vertical las {Cards} de tus seguidos, la {LowBar}, la {Feedbar} y el {Chatbar}
import React from "react";
import { useDispatch } from 'react-redux'
import Crearusuario from "../../Helpers/Creadordeusuario"
import { createUser } from '../../Redux/Actions';
import images from "../ExampleData/cefe/Cefefotos.js";


const Feed = () =>{
  const user = {
    profilePic : images.foto0, 
    username : 'ceferinoLarva', 
    bio : 'El mas Larvon de todos jajja saludos perros', 
    posts : [{image : images.foto2, desc : 'zzz aca hechandome una siestita como buena larva que soy jsjsjs xdd'}, {image : images.foto2, desc : 'zzz aca hechandome una siestita como buena larva que soy jsjsjs xdd'}, {image : images.foto2, desc : 'zzz aca hechandome una siestita como buena larva que soy jsjsjs xdd'}], 
    follows : [0, 4, 20, 1],
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