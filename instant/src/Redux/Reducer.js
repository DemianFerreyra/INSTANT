import axios from 'axios';
import { GETUSER, GetFollowList, GETFEED, GETSELF, GETPOSTS} from './Actions'



const initialState = {
  selfuser: [],
  users: [],
  user: {},
  posts: [],
  recoposts: [],
};

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case "clean":
          console.log('borrando')
          return{
            ...state,
            user: {},
            users: [],
            posts: [],
          }
        case GETUSER:
          console.log('get de usuario completo')
        return{
            ...state,
            user: action.payload
        }
        case GETSELF:
          console.log('get de usuario self completo')
          console.log(action.payload)
        return{
            ...state,
            selfuser: action.payload
        }
        
        case GETFEED:
          console.log('get de posts completo')
        return{
            ...state,
            posts: action.payload
        }

        case GETPOSTS:
          console.log('get de posts recomendados completo')
        return{
            ...state,
            recoposts: action.payload
        }

        case GetFollowList:
          console.log('get de usuarioss completo')
        return{
            ...state,
            users: action.payload
        }

        default: return {...state}
    }
}
export default rootReducer;