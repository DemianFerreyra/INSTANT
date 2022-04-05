import React from 'react';
import { Link } from 'react-router-dom';


//Renderizara la publicacion y recibira como parametro el (nombre y foto de perfil del usuario, una id para el link al perfil del mismo), descripcion de la publicacion, la imagen y la cantidad de likes
const Card = ({image, desc, name, profpic, id, date}) =>{
    return (
        <div className='Card'>
         <img className ='Postimg' src={image}/>
         <p>{desc}</p>
        
         <div className='ProfilePost'>
          <img className ='Profilepic' src={profpic}/>
          <Link style={{textDecoration: 'none', color: "black"}} to={`/profile/${id}`}>  
          <h2 >{name}</h2>
          </Link>
          <p style={{position:'absolute', translate:280}}>{date}</p>
          </div>     
        </div>
      )
}
export default Card;