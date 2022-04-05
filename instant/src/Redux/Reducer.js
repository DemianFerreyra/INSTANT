import axios from 'axios';
import { GETUSER, CreateUser, GetFollowList, GETFEED} from './Actions'
let ids = 0;

const initialState = {
  users: [],
  user: {},
  posts: [],
};
const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case GETUSER:
          console.log('get de usuario completo')
        return{
            ...state,
            user: action.payload
        }
        
        case GETFEED:
          console.log('get de posts completo')
        return{
            ...state,
            posts: action.payload
        }

        case GetFollowList:
          console.log('get de usuarioss completo')
        return{
            ...state,
            users: action.payload
        }

        case CreateUser:
        console.log('nuevo usuario')
        ids++
        axios.post(
            `http://localhost:3001/profiles`,
            {
              profilePic : action.payload.profilePic,
              username : action.payload.username,
              bio : action.payload.bio,
              posts : action.payload.posts,
              follows : action.payload.follows,
              followers : action.payload.followers,
            },
            {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              }
            }
          )
        return{
            ...state,
            users: [...state.users, {...action.payload, id: ids}]
        }

        default: return {...state}
    }
}
export default rootReducer;