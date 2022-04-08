//barra inferior (feed => publicaciones recomendadas => crear publicacion/historia => perfil)
import { Link, useParams } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'

const Lowbar = () =>{
    return(<div className="Lowbar">
        <Link to="/">
             <img src={require(`../iconos/home.svg`).default} alt="homebutton" className="Link"/>
        </Link>
        <Link to="/recommended">
             <img src={require(`../iconos/recommended.svg`).default} alt="recommended" className="Link"/>
        </Link>
        <Link to="/createpost">
             <img src={require(`../iconos/add.svg`).default} alt="create post" className="Link"/>
        </Link>
        <Link to="/profile/0">
             <img src={require(`../iconos/profile.svg`).default} alt="profile" className="Link"/>
        </Link>
    </div>)
}
export default Lowbar;