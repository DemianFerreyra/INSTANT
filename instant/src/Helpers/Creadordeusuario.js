import { useDispatch } from 'react-redux';
import React from 'react';
import images from "../Components/ExampleData/Cefefotos.js";
import axios from "axios"
let ids = 4;


export function Crearusuario(){
  const user = {
    profilePic : images.ath1, 
    username : 'Athena', 
    bio : 'Fotos de stock de Athena (pexels.com)', 
    posts : [{image: images.ath0, desc: "Viajando...", uploadername: "Athena", uploaderpic: images.ath1, uploaderid: 3, date: "8/4/2022"}], 
    follows : [0],
    followers: []
  }
  const user2 = {
    profilePic : images.Kool0, 
    username : 'KoolShooters', 
    bio : 'Fotos de stock de KoolShooters (pexels.com)', 
    posts : [{image: images.Kool1,
      desc: "#Fitness",
      uploadername: "KoolShooters",
      uploaderpic: images.Kool0,
      uploaderid: 4,
      date: "7/4/2022"
    }], 
    follows : [0],
    followers: []
  }
  const user3 = {
    profilePic : images.jul3, 
    username : 'JulianaStein', 
    bio : 'Fotos de stock de JulianaStein (pexels.com)', 
    posts : [{image: images.jul0,
      desc: "Solo yo",
      uploadername: "JulianaStein",
      uploaderpic: images.jul3,
      uploaderid: 5,
      date: "6/4/2022"
    },
    {image: images.jul2,
      desc: "#Black",
      uploadername: "JulianaStein",
      uploaderpic: images.jul3,
      uploaderid: 5,
      date: "8/4/2022"
    }], 
    follows : [0],
    followers: []
  }
  CreateUser(user2)
  // {
  //   "image": "/static/media/cefe2.b6c4faaeef4fc06d8feb.jpeg",
  //   "desc": "zzz aca hechandome una siestita",
  //   "uploadername": "Gato Naranja",
  //   "uploaderpic": "/static/media/cefe1.04c1be5be2781b3dff75.jpg",
  //   "uploaderid": 2,
  //   "date": "4/5/2022"
  // },
}
function CreateUser(data){
  ids++
  axios.post(
    `http://localhost:3001/profiles`,
    {
      profilePic : data.profilePic,
      username : data.username,
      bio : data.bio,
      posts : data.posts,
      follows : data.follows,
      followers : data.followers,
      id : ids
    }
)
}