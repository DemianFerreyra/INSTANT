import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { createUser } from '../Redux/Actions.js';
import images from "../Components/ExampleData/cefe/Cefefotos.js";

export default function Crearusuario(){
  const dispatch = useDispatch()

  const user2 = {
    profilePic : images.foto3, 
    username : 'Gato Naranja', 
    bio : 'Gato de color naranja', 
    posts : [{image : images.foto2, desc : 'zzz aca hechandome una siestita'}, {image : images.foto1, desc : 'entre a una caja y sali sin guevitos'}], 
    follows : [0, 4, 20, 1],
    followers: []
  }
  //dispatch(createUser(user2))
}