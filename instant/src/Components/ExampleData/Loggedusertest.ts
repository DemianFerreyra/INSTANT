import images from "./Cefefotos";
//aca tenemos al usuario que se usara como prueba debido a que el sistema register/login no ha sido implementado. Si la database esta levantada, este usuario podra ser cambiado y se mostraran distintos atributos ajenos a el pero conectados(como los usuarios a los que sigue, etc)

interface User {
  profilePic : File,
  username : string,
  bio : string,
  id : number,
  posts : object[],
  follows : number[],  //los follows y followers son un arreglo de numeros que contiene las id correspondientes
  followers : number[]
}

export const Testuser : User = {
    profilePic : images.foto3, 
    username : 'Usuario de prueba', 
    bio : 'Soy solo un usuario de prueba, pero puedes modificar mis atributos!', 
    id : 0, 
    posts : [], 
    follows : [],
    followers: [1,2,3,10,5]
}