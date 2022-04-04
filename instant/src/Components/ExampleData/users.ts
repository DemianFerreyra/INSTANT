import images from "./cefe/Cefefotos";

interface User {
  profilePic : File,
  username : string,
  bio : string,
  id : number,
  posts : object[],
  follows : number[],  //los follows y followers son un arreglo de numeros que contiene las id correspondientes
  followers : number[]
}

let seferino : User = {
    profilePic : images.foto0, 
    username : 'ceferinoLarva', 
    bio : 'El mas Larvon de todos jajja saludos perros', 
    id : 0, 
    posts : [{image : images.foto2, desc : 'zzz aca hechandome una siestita como buena larva que soy jsjsjs xdd'}, {image : images.foto2, desc : 'zzz aca hechandome una siestita como buena larva que soy jsjsjs xdd'}, {image : images.foto2, desc : 'zzz aca hechandome una siestita como buena larva que soy jsjsjs xdd'}], 
    follows : [0, 4, 20, 1],
    followers: []
}

export default seferino;