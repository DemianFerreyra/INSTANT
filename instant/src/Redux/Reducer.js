import axios from 'axios';
import { GetUser, CreateUser} from './Actions'
let ids = 0;

const initialState = {
  users: [],
  user: {},
};
console.log('a')
const rootReducer = (state = initialState, action) =>{
    console.log('a')
    console.log(state.users)
    switch(action.type){
        case GetUser:
        return{
            ...state,
            user: action.payload
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
              followers : action.payload.posts,
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