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
        return{
            ...state,
            users: [...state.users, {...action.payload, id: ids}]
        }
        default: return {...state}
    }
}
export default rootReducer;