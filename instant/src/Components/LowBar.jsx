//barra inferior (feed => publicaciones recomendadas => crear publicacion/historia => perfil)
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'


const Lowbar = () =>{
    const dispatch = useDispatch();
    return(<div className="Lowbar">
        <Link to="/">
             <img src={require(`../iconos/home.svg`).default} alt="homebutton" className="Link"/>
        </Link>
        <Link to="/profile/0" onClick={dispatch({type: "clean"})}>
             <img src={require(`../iconos/profile.svg`).default} alt="profile" className="Link"/>
        </Link>
    </div>)
}
export default Lowbar;