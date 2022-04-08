//Componente para crear un post
import {React, useState} from "react";
import { CreatePost } from "../../Helpers/Helperfunctions";
import { useSelector, useDispatch } from "react-redux";
import { GetSelf } from "../../Redux/Actions";

const Createpost = () =>{
    const self = useSelector((state) => state.selfuser)
    const dispatch = useDispatch();
    let imgInput = undefined
    let nameInput = undefined


    function returned(){
        imgInput = document.getElementById("inpFile")
        nameInput = document.getElementById("inpName")
        if(imgInput.files[0] && nameInput.value){
            let image = imgInput.files[0]
            let description = nameInput.value
            let uploadername = self.username
            let uploaderpic = self.profilePic
            let uploaderid = self.id
            let date = "8/4/2022"
            CreatePost(image,description,uploadername,uploaderpic,uploaderid,date);
        }else{
         alert('Comprueba antes de subir')
        }
    }
    return(
        <div className="Postcreator">     
         <form> 
          <input 
            type="text" 
            name="description"
            id="inpName"
           />
           <input 
            type="File" 
            name="image"
            id="inpFile"
            accept="image/*"
           />
          </form>
          <button onClick={returned}>Postear</button>
        </div>
    )
}
export default Createpost;