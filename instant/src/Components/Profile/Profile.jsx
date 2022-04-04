//Renderizara las {Cards} de (sus publicaciones, su foto de perfil, nombre de usuario y su descripcion), ademas del {OptionsButton}(la cual solo se desplegara mostrando la opcion de cambiar entre el modo oscuro y claro y el link hacia el /About) y de la {LowBar}
import React from "react";
import { Link } from "react-router-dom";
import seferino from "../ExampleData/users.ts";
import Cards from "../Cards"

function Profile(){
      return (
       <div>
         <div className="Profile">
           <div className="Right">
             <li>
               <img src={seferino.profilePic}/>
               <p className="Name">{seferino.username}</p>
             </li>
             <p>{seferino.bio}</p>
           </div>  
           <div className="Left">
             <ul>
               <li className="top" style={{listStyle : 'none'}}>
                 <p>Followers : <Link style={{textDecoration: 'none', color: "black"}} to ='/about'>{seferino.followers.length}</Link></p>
                 <p>Follows : <Link style={{textDecoration: 'none', color: "black"}} to ='/about'>{seferino.follows.length}</Link></p>
               </li>
             </ul>
           </div>
         </div>
         <div className="Cards">
             {
              seferino.posts?.map((post) =>
              //image, desc, name, profpic, id
              <Cards image={post.image} desc={post.desc} name={seferino.username} profpic={seferino.profilePic} id={seferino.id}/>
             )}
          </div>
       </div>
      )
}
export default Profile;