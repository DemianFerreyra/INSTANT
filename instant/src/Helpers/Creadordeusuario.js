import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { createUser } from '../Redux/Actions.js';
import images from "../Components/ExampleData/cefe/Cefefotos.js";

export default function Crearusuario(){
  const dispatch = useDispatch()

  console.log('boton clickado')
  const user = {
    profilePic : images.foto0, 
    username : 'ceferinoLarva', 
    bio : 'El mas Larvon de todos jajja saludos perros', 
    posts : [{image : images.foto2, desc : 'zzz aca hechandome una siestita como buena larva que soy jsjsjs xdd'}, {image : images.foto2, desc : 'zzz aca hechandome una siestita como buena larva que soy jsjsjs xdd'}, {image : images.foto2, desc : 'zzz aca hechandome una siestita como buena larva que soy jsjsjs xdd'}], 
    follows : [0, 4, 20, 1],
    followers: []
  }
  console.log(user)
  dispatch(createUser(user))
}