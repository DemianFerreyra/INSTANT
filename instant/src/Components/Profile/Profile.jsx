//Renderizara las {Cards} de (sus publicaciones, su foto de perfil, nombre de usuario y su descripcion), ademas del {OptionsButton}(la cual solo se desplegara mostrando la opcion de cambiar entre el modo oscuro y claro y el link hacia el /About) y de la {LowBar}
import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Link, useParams} from "react-router-dom";
import { getUser } from "../../Redux/Actions";
import Cards from "../Cards"

const Profile = () =>{

  const details = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const id = useParams();

  
  React.useEffect(() => {
      console.log(id)
      dispatch(getUser(id.id))
  }, []);

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
             </ul>
             <Link style={{textDecoration: 'none', color: "black"}} to ={`/`}> <h2>POSTS</h2> </Link> 
           </div>
         </div>
         <div className="Cards">
             {
              details.posts?.map((post) =>
              //image, desc, name, profpic, id
              <Cards image={post.image} desc={post.desc} name={details.username} profpic={details.profilePic} id={details.id}/>
             )}
          </div>
       </div>) : null
      )
}
export default Profile;