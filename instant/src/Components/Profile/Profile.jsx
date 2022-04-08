//Renderizara las {Cards} de (sus publicaciones, su foto de perfil, nombre de usuario y su descripcion), ademas del {OptionsButton}(la cual solo se desplegara mostrando la opcion de cambiar entre el modo oscuro y claro y el link hacia el /About) y de la {LowBar}
import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link, useParams} from "react-router-dom";
import { getUser, GetSelf } from "../../Redux/Actions";
import Cards from "../Cards"
import {Setfollow} from "../../Helpers/Helperfunctions"

export const Profile = () =>{
  const self = useSelector((state) => state.selfuser)
  const details = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const id = useParams();
  let boton = undefined;

  React.useEffect(() => {
      dispatch(getUser(id.id))
      dispatch(GetSelf(0))
  }, []);
  function handleclick(){
    Setfollow(self.follows, details.followers, self.id, parseInt(id.id))
    self.follows.filter(Checkfollow)
  }

  self.follows?.filter(Checkfollow)
  function Checkfollow(follow){
    boton = document.getElementById('seguir');
    if(boton && parseInt(id.id) === follow){
    boton.innerText = "dejar de seguir"
    }else if(boton && parseInt(id.id) !== follow){
    boton.innerText = "seguir"
    }
  }
      return (
       details.username?(<div>
         <div className="Profile">
           <div className="Right">
             <li>
               <img src={details.profilePic}/>
               <p className="Name">{details.username}</p>
             </li>
             <p>{details.bio}</p>
           </div>  
           <div className="Left">
             <ul>
               <li className="top" style={{listStyle : 'none'}}>
                 <p>Followers : <Link style={{textDecoration: 'none', color: "black"}} to ={`/profile/${details.id}/followers`}>{details.followers.length}</Link></p>
                 <p>Follows : <Link style={{textDecoration: 'none', color: "black"}} to ={`/profile/${details.id}/follows`}>{details.follows.length}</Link></p>
               </li>
               <li className="top" style={{listStyle : 'none'}}>
                 <button className="profbutton" id="seguir" onClick={handleclick}>seguir</button>
                 <button className="profbutton">mensaje</button>
               </li>
             </ul>
           </div>
         </div>
         <div className="Cards">
             {
              details.posts?.map((post) =>
              //image, desc, name, profpic, id
              <Cards image={post.image} desc={post.desc} name={details.username} profpic={details.profilePic} id={details.id} date={post.date}/>
             )}
          </div>
       </div>) : null
      )
}