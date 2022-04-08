//Componente para crear un post
import React from "react";
import { CreatePost } from "../../Helpers/Helperfunctions";
import { useSelector, useDispatch } from "react-redux";
import { GetSelf } from "../../Redux/Actions";

const Createpost = () =>{
    const self = useSelector((state) => state.selfuser)
    const dispatch = useDispatch();
    let nameInput = undefined
    let imgInput = undefined
    let img = undefined
    React.useEffect(() => {
        dispatch(GetSelf(0))
    }, []);

    const handleChange = async () =>{
        const reader = new FileReader();
        const file = document.querySelector('input[type=file]').files[0]; 
        reader.readAsDataURL(file)
        reader.onload = function(event) {
            img = event.target.result
            console.log(event.target.result);
        };
    }
 
    const returned = () =>{
        nameInput = document.getElementById("inpName")
        imgInput = document.getElementById("inpFile")
        console.log(imgInput.files[0])
        if(imgInput.files[0] && nameInput.value && self.posts){
            let image = img
            let description = nameInput.value
            let uploadername = self.username
            let uploaderpic = self.profilePic
            let uploaderid = self.id
            let date = "8/4/2022"
            let posts = self.posts
            CreatePost(image,description,uploadername,uploaderpic,uploaderid,date,posts);
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
            type="file" 
            name="image"
            id="inpFile"
            accept="image/*"
            onChange={handleChange}
           />
          </form>
          <button onClick={returned}>Postear</button>
        </div>
    )
}
export default Createpost;